import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StickyService} from "../../service/sticky.service";
import {Sticky} from "../../model/sticky";

@Component({
  selector: 'app-edit-sticky',
  templateUrl: './edit-sticky.component.html',
  styleUrls: ['./edit-sticky.component.css']
})
export class EditStickyComponent implements OnInit{

  public stickyEditForm!: FormGroup;

  selectedStickyNote!: Sticky;
  constructor(private stickyService: StickyService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.stickyEditForm = this.formBuilder.group({
      title: [{value: '', disabled: false}, Validators.required],
      description: [{value: '', disabled: false}, Validators.required],
      categoryName: [{value: '', disabled: false}, Validators.required]
    });
  }

  retrieveStickyNoteData(stickyNoteId: number) {
    this.stickyService.getStickyNoteById(stickyNoteId).subscribe(
      (stickyNote: Sticky) => {
        this.selectedStickyNote = stickyNote;
      },
      (error) => {
        // Handle error case, such as displaying an error message
      }
    );
  }
}
