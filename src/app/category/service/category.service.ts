import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BackendService} from "../../backend/backend.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public backendService: BackendService) { }

  public readCategoriesByUserId(userId: number): Observable<any>{
    return this.backendService.get(`http://localhost:4201/api/categories/user/${userId}`);
  }
}
