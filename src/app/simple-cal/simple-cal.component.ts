import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-simple-cal',
  templateUrl: './simple-cal.component.html',
  styleUrls: ['./simple-cal.component.css']
})
export class SimpleCalComponent  {

public num1:number;
public num2:number;
public result:number;

log(x: any){
  console.log(x);
}

add(){
  this.result=this.num1 + this.num2;  
  
}
sub(){
  this.result=this.num1 - this.num2;  
}
mult(){
  this.result=this.num1 * this.num2;  
}
div(){
  this.result=this.num1 / this.num2;  
}


}
