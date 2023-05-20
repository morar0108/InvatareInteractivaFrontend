import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StickyDashboardComponent} from "./sticky/components/sticky-dashboard/sticky-dashboard.component";
import {LoginComponent} from "./login/login.component";
import {CreateStickyComponent} from "./sticky/components/create-sticky/create-sticky.component";
import {EditStickyComponent} from "./sticky/components/edit-sticky/edit-sticky.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path: 'sticky',
    component: StickyDashboardComponent
  },
  {
    path: 'add-sticky',
    component: CreateStickyComponent
  },
  {
    path: 'edit-sticky',
    component: EditStickyComponent
  },
  {
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
