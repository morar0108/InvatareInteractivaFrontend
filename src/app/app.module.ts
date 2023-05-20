import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserModule} from "./user/user.module";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {LoginComponent} from "./login/login.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MAT_SNACK_BAR_DATA, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatRadioModule} from "@angular/material/radio";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatSortModule} from "@angular/material/sort";
import {MatSidenavModule} from "@angular/material/sidenav";
import {LayoutModule} from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from "@angular/common";
import {TokenInterceptorService} from "./services/token-interceptor.service";
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatBadgeModule} from "@angular/material/badge";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {UserAddComponent} from "./user/components/user-add/user-add.component";
import { CreateStickyComponent } from './sticky/components/create-sticky/create-sticky.component';
import { EditStickyComponent } from './sticky/components/edit-sticky/edit-sticky.component';
import { CreateCategoryComponent } from './category/components/create-category/create-category.component';
import { StickyDashboardComponent } from './sticky/components/sticky-dashboard/sticky-dashboard.component';
import {RegisterComponent} from "./register/register.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidenavComponent,
    UserAddComponent,
    CreateStickyComponent,
    EditStickyComponent,
    CreateCategoryComponent,
    StickyDashboardComponent,
    RegisterComponent
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatOptionModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    MatNativeDateModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSortModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    LayoutModule,
    MatProgressBarModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatGridListModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }, {provide: MAT_SNACK_BAR_DATA, useValue: {}}],
  bootstrap: [AppComponent]
})

export class AppModule { }


