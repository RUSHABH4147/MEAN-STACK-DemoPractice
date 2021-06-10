import { Component, OnInit } from '@angular/core';
import {GetapiService} from "../getapi.service"

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
 public emps:any;
 public single:any;
 public id : any;

  constructor( private api : GetapiService ,) { 
    
  }
  
  ngOnInit() {
    this.api.apigetcall().subscribe((data) =>{ this.emps= data } )
  }
  onSubmit(val:any){
    this.api.apipostcall(val).subscribe((val) =>{console.log(val)} )
    
   console.log(val)
  }
  onSearch(id:any){
    this.api.findbyid(this.id).subscribe((result) =>{this.single= result} )
  }
 
}
