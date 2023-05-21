import {Component, OnInit} from '@angular/core';
import {Sticky} from "../../model/sticky";
import {StickyService} from "../../service/sticky.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CategoryService} from "../../../category/service/category.service";
import {UserService} from "../../../user/service/user.service";
import {Category} from "../../../category/model/category";

@Component({
  selector: 'app-create-sticky',
  templateUrl: './create-sticky.component.html',
  styleUrls: ['./create-sticky.component.css']
})
export class CreateStickyComponent implements OnInit{

  public stickyForm!: FormGroup;
  public categoriesByUserId: Category[] = [];

  constructor(private stickyService: StickyService,
              private formBuilder:FormBuilder,
              private categoryService: CategoryService,
              private userService: UserService,
              private router: Router) {
  }


  onSubmit() {
      let sticky = this.stickyForm.value;
      this.stickyService.addNewSticky(sticky).subscribe((response) =>{
        this.router.navigate(['/sticky']);
      })
  }

  ngOnInit(): void {
    this.getUserByUsername();
    this.initForm();
  }

  getCategoriesForSelection(userId: number) {
    this.categoryService.readCategoriesByUserId(userId).subscribe(categories => {
      console.log(categories);
      this.categoriesByUserId = categories;
    })
  }

  getUserByUsername() {
    this.userService.getUserByUsername().subscribe(user => {
      console.log(user);
      this.getCategoriesForSelection(user.id);
    })
  }

  initForm() {
    this.stickyForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      categoryName: ['', Validators.required]
    });
  }

}
