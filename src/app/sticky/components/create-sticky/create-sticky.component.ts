import {Component, OnInit} from '@angular/core';
import {Sticky} from "../../model/sticky";
import {StickyService} from "../../service/sticky.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-sticky',
  templateUrl: './create-sticky.component.html',
  styleUrls: ['./create-sticky.component.css']
})
export class CreateStickyComponent implements OnInit{

  public stickyForm!: FormGroup;

  constructor(private stickyService: StickyService, private formBuilder:FormBuilder, private router: Router) {
  }


  onSubmit() {
      let sticky = this.stickyForm.value;
      this.stickyService.addNewSticky(sticky).subscribe((response) =>{
        this.router.navigate(['/sticky']);
      })
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.stickyForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      categoryName: ['', Validators.required]
    });
  }

}
