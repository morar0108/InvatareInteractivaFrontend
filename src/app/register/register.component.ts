import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user/service/user.service';
import { User } from '../user/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', [Validators.required]],
      gender: ['', Validators.required],
      email: ['', [Validators.required]],
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.router.navigate(['']);
  }

  registerUser() {
      let user = this.registerForm.value;
      console.log(user);
      this.userService.addUser(user).subscribe((payload) =>{
        this.router.navigate(['']);
      });
  }
}
