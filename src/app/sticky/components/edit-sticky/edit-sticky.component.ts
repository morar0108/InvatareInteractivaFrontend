import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StickyService} from "../../service/sticky.service";
import {Sticky} from "../../model/sticky";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-sticky',
  templateUrl: './edit-sticky.component.html',
  styleUrls: ['./edit-sticky.component.css']
})
export class EditStickyComponent implements OnInit{

  public stickyEditForm!: FormGroup;

  selectedStickyNote!: Sticky;
  constructor(private stickyService: StickyService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params['stickyId']);
      this.retrieveStickyNoteData(params['stickyId']);
    })
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
        console.log(this.selectedStickyNote);
        this.populateFormWithExistingSticky();
      },
      (error) => {
        // Handle error case, such as displaying an error message
      }
    );
  }

  populateFormWithExistingSticky() {
    if(this.selectedStickyNote) {
      this.stickyEditForm.get('title')?.setValue(this.selectedStickyNote.title);
      this.stickyEditForm.get('description')?.setValue(this.selectedStickyNote.description);
      this.stickyEditForm.get('categoryName')?.setValue(this.selectedStickyNote.categoryName);
    }
  }

  onSubmit() {
    let sticky = this.stickyEditForm.value;
    sticky = {
      ...sticky,
      id: this.selectedStickyNote.id
    }
    this.stickyService.editSticky(sticky).subscribe(() => {
      alert("Edit saved successfully!");
      this.router.navigate(["/sticky"]);
    })
  }
}
