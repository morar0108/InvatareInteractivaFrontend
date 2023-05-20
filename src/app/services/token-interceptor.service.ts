import { Injectable } from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let token=localStorage.getItem('token');
    let bearerToken = 'Bearer ' + token;
    let jwtToken = req.clone({
      setHeaders: {
        'Authorization': bearerToken,
        'Access-Control-Allow-Origin': '*'
      }
    })
    return next.handle(jwtToken).pipe(tap({next:()=>{},
      error: (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 0) {
            return;
          }
          this.router.navigate(['error']);
        }
      },
    }));
  }
}
