import { Injectable } from '@angular/core';
import {BackendService} from "../../backend/backend.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sticky} from "../model/sticky";

@Injectable({
  providedIn: 'root'
})
export class StickyService {

  constructor(public backendService: BackendService, private http:HttpClient) { }

  public readStickyList(): Observable<any>{
    return this.backendService.get("http://localhost:4201/sticky-notes");
  }

  public addNewSticky(sticky: Sticky): Observable<any>{
    return this.backendService.post("http://localhost:4201/saveStickyNote", sticky);
  }

  public deleteSticky(sticky: Sticky): Observable<any>{
    return this.backendService.delete(`http://localhost:4201/${sticky.id}`);
  }

  public editSticky(sticky: Sticky): Observable<any>{
    return this.backendService.put(`http://localhost:4201/${sticky.id}`, sticky);
  }

  getStickyNoteById(stickyNoteId: number) {
    return this.backendService.get("http://localhost:4201/" + `${stickyNoteId}`);
  }
}
