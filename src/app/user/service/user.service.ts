import { Injectable } from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {User} from "../models/user";
import {BehaviorSubject, catchError, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FormGroup, FormControl, Validators, ɵFormGroupRawValue} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userform: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    mobileNumber: new FormControl('', [Validators.required, Validators.pattern("\\(?\\+\\(?49\\)?[ ()]?([- ()]?\\d[- ()]?){10}")]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('')
  });


  public bugAssignment$ : BehaviorSubject<[User | null, string]> = new BehaviorSubject<[User | null, string]>([null, '']);

  constructor(public backendService: BackendService, private http:HttpClient, private dialog: MatDialog) { }


  public readUsers() : Observable<any>{
    return this.backendService.get("http://localhost:4201/users");
  }

  getUserByUsername(): Observable<any>{
    return this.backendService.get("http://localhost:4201/userByUsername?username=" + localStorage.getItem('username'));
  }


  public saveOrUpdate() : any{
    return this.backendService.put("http://localhost:4201/user", null, null);
  }

  addUser(user: User) : Observable<any>{
    return this.backendService.post("http://localhost:4201/user", user);
  }


  updateUser(user: User): Observable<any>{
    return this.backendService.put("http://localhost:4201/userUpdate", user);
  }


  public changeActivationStatus(username : any) : Observable<any>{
    let url = "http://localhost:4201/user/changeStatus";
    return this.backendService.post(url, username);
  }

  public activateUser(username: any) : Observable<any>{
    return this.backendService.post("http://localhost:4201/user/activateUser",username)
  }

  public deactivateAccount(message: string | null) : Observable<any>{
    const username = localStorage.getItem('username');
    const url = `http://localhost:4201/deactivateAccount?username=${username}&message=${message}`;
    // @ts-ignore
    return this.backendService.post(url);
  }

  public addUserRequest(message: string | null) : Observable<any>{
    const username = localStorage.getItem('username');
    const url = `http://localhost:4201/addUserReques?username=${username}&message=${message}`;
    // @ts-ignore
    return this.backendService.post(url);
  }

  populateForm(user: User) {
    this.userform.setValue(user);
  }

}
