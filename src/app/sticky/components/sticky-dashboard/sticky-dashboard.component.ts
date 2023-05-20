import {Component, OnInit} from '@angular/core';
import {Sticky} from "../../model/sticky";
import {StickyService} from "../../service/sticky.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {EditStickyComponent} from "../edit-sticky/edit-sticky.component";

@Component({
  selector: 'app-sticky-dashboard',
  templateUrl: './sticky-dashboard.component.html',
  styleUrls: ['./sticky-dashboard.component.css']
})
export class StickyDashboardComponent implements OnInit{

  stickyList: Sticky[] = [];

  constructor(public stickyService: StickyService, private router: Router, public dialogService: MatDialog) {
  }

  ngOnInit(): void {
    this.stickyService.readStickyList().subscribe((response) =>{
      this.stickyList = response;
    })
  }


  openEditDialog() {
    this.router.navigate(['/edit-sticky']);
  }

  openAddSticky() {
    this.router.navigate(['/add-sticky']);
  }

  deleteSticky(sticky: Sticky) {

  }
}
