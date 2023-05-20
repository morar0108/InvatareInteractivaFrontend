import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user/service/user.service";
import {AuthServiceService} from "../auth-service.service";
import {getCaptcha} from "../captcha/forcaptcha";
import {checkIt} from "../captcha/forcaptcha";
import {User} from "../user/models/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  protected aFormGroup!: FormGroup;
  constructor(private authService: AuthServiceService, private router: Router, private formBuilder: FormBuilder,
              private userService:UserService) { }
  showErrorMessage = false;
  showErrorCaptcha = false;
  showUserDeact = false;
  showErrorInactive = false;
  userList!: User[];
  user: any;
  noOfAttempts = 0;
  ngOnInit() {
    getCaptcha();
    this.initForm();
    this.aFormGroup = this.formBuilder.group({
      recaptcha: ['',Validators.required]
    });
  }
  initForm(){
    this.formGroup = new FormGroup({
        username: new FormControl("",[Validators.required]),
        password: new FormControl("",[Validators.required])
      },
    );
  }
  refreshData(): void {
    this.userService.readUsers().subscribe((payload) => {
      this.userList = payload
    })
  }
  regenerateCaptcha(){
    getCaptcha();
  }
  checkCaptcha(){
    checkIt();
  }

  checkActive() {
    this.authService.loginUser(this.formGroup.value).subscribe({next: (resulted: string) => {
        this.showErrorInactive = false;
        this.showErrorMessage = false;
        this.showUserDeact = false;
        this.showErrorCaptcha = false;
        if (resulted=='passed') {
          localStorage.setItem('userPassed','1');
          this.authService.loginPass(this.formGroup.value).subscribe({next: (resultedValue: string) => {
              if (resultedValue=='passed') {
                this.authService.isActive(this.formGroup.value).subscribe(({
                  next: (checkResult: boolean) => {
                    if (checkResult) {
                      this.loginProcess();
                    }
                    else {
                      this.showErrorInactive = true;
                    }
                  }
                }))
              } else {
                if (this.noOfAttempts==4){
                  this.authService.deactivateUser(this.formGroup.controls['username'].value).subscribe({next: ()=>{
                      // user is now deactivated
                    }})
                  this.showErrorMessage = true;
                  this.showUserDeact = true;
                  this.noOfAttempts = 0;
                } else {
                  this.noOfAttempts++;
                  this.showErrorMessage = true;
                }
              }
            }})
        } else {
          localStorage.setItem('userPassed','0');
          this.showErrorMessage = true;
        }
      }})
  }

  loginProcess() {
    if (this.formGroup.valid) {
      this.showErrorMessage = false;
      this.showErrorCaptcha = false;
      this.showUserDeact = false;
      this.authService.login(this.formGroup.value).subscribe({
        next: (result: string) => {
          if (result) {
            if (localStorage.getItem('captchaTrue')=='1') {
              localStorage.setItem('token', result);
              localStorage.setItem('loginPassed','1');
              localStorage.setItem('username',this.formGroup.controls['username'].value);
              this.router.navigate(['sticky']);
              alert('working');
            } else {
              this.showErrorCaptcha = true;
            }
          } else {
            this.showErrorMessage = true;
          }
        }
      }),
        {error: (error: any) => console.log(error)}
    }
  }
}
