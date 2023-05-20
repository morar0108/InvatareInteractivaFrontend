import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private jwt! : String | null;
  private permissions! : String[];

  constructor(private http:HttpClient) { }

  loginUser(data: any): Observable<any>{
    return this.http.post("http://localhost:4201/user/checkUser", data,{responseType: 'text'});
  }

  loginPass(data: any): Observable<any>{
    return this.http.post("http://localhost:4201/user/checkPass", data,{responseType: 'text'});
  }

  login(data: any): Observable<any>{
    return this.http.post("http://localhost:4201/user/login", data,{responseType: 'text'});
  }

  logout(username: any): Observable<any>{
    return this.http.post("http://localhost:4201/user/logout", username);
  }

  isActive(username: any): Observable<any>{
    return this.http.post("http://localhost:4201/user/isActive", username);
  }

  deactivateUser(username : any) : Observable<any>{
    return this.http.post("http://localhost:4201/user/deactivateUser", username);
  }

  isLoggedIn() {
    if (localStorage.getItem('loginPassed')=='1') {
      return true;
    } else {
      return false;
    }
  }

  hasPermission( permission : String) : boolean {
    this.jwt = localStorage.getItem("token");
    if (!(this.jwt === null || this.jwt === undefined)) {
      this.permissions = JSON.parse(window.atob(this.jwt.split('.')[1]))["authorities"].toString().split(',') as String[];
      return this.permissions.includes(permission);
    } else return false;
  }
}
