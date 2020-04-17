import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SchoolsListComponent } from './schools-list/schools-list.component';
import { SchoolsFormComponent } from './schools-form/schools-form.component';
import { SchoolsDetailComponent } from './schools-detail/schools-detail.component';
import { ClassesDetailComponent } from './classes-detail/classes-detail.component';
import { ClassesListComponent } from './classes-list/classes-list.component';
import { ClassesFormComponent } from './classes-form/classes-form.component';
import { Router, RouterModule } from '@angular/router';
import { SchoolService } from './school.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ClassService } from './class.service';
import { NavComponent } from './nav/nav.component';



@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
    {path:'',component: SchoolsListComponent},
    {path:'school-detail/:id',component: SchoolsDetailComponent},
    {path:'add-school',component: SchoolsFormComponent},
    {path:'edit-school/:id',component: SchoolsFormComponent},
    {path:'school-detail/:id',component: ClassesListComponent},
    {path:'school-detail/:id/class-detail/:idc',component: ClassesDetailComponent},
    {path:'school-detail/:id/add-class',component: ClassesFormComponent},
    {path:'school-detail/:id/edit-class/:idc',component: ClassesFormComponent}
  ]), HttpClientModule, ReactiveFormsModule 
  ],
  declarations: [ AppComponent, HelloComponent, SchoolsListComponent, SchoolsFormComponent, SchoolsDetailComponent, ClassesDetailComponent, ClassesListComponent, ClassesFormComponent, NavComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SchoolService, ClassService]
})
export class AppModule { }
