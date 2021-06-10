import { StudentComponent } from './student/student.component';
import { ApiComponent } from './api/api.component';
import { ItembillComponent } from './itembill/itembill.component';
import { SimpleCalComponent } from './simple-cal/simple-cal.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path:"" , component:HomeComponent},
  {path:"About" , component:AboutComponent},
  {path:"calci" , component:SimpleCalComponent},
  {path:"bill" , component:ItembillComponent},
  {path:"get" , component:ApiComponent},
  {path:"student" , component:StudentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
