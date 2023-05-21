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

  stickyList: Sticky[] = [{
    id: 0,
    title: 'Title1',
    description: 'Description1',
    categoryName: 'Category1'
  },
    {
      id: 2,
      title: 'Title3',
      description: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
      categoryName: 'Category1'
    }];

  constructor(public stickyService: StickyService, private router: Router, public dialogService: MatDialog) {
  }

  ngOnInit(): void {
    this.getStickyList();
  }

  getStickyList() {
    this.stickyService.readStickyList().subscribe((response) =>{
      this.stickyList = response;
      console.log(response);
    })
  }

  openEditDialog(sticky: Sticky) {
    this.router.navigate(['/edit-sticky'], {queryParams: {stickyId: sticky.id}});
  }

  openAddSticky() {
    this.router.navigate(['/add-sticky']);
  }

  deleteSticky(sticky: Sticky) {
    this.stickyService.deleteSticky(sticky).subscribe(() => {
      alert('Sticky note deleted successfully!');
      this.getStickyList();
    }, error => {
      alert('Error when trying to delete sticky note!');
    })
  }
}
