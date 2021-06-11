import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {
  constructor( private http : HttpClient ) { 

  }
  // //get
  // apigetcall(){
  //  return this.http.get("http://localhost:5000/users")
  // }
  // //post
  // apipostcall(data:any){
  //   return this.http.post("http://localhost:5000/users/createuser",data)
  //  }
  //  //find by id
  //  findbyid(data:any){
  //   return this.http.get(`http://localhost:5000/users/${data}`)
  //  }
  //  getstudent(){
  //   return this.http.get("http://localhost:5000/student")
  //  }
  //  //post
  //  poststudent(data:any){
  //    return this.http.post("http://localhost:5000/student/poststudent",data)
  //   }
  //   //find by id
  //   findstudent(data:any){
  //    return this.http.get(`http://localhost:5000/student/${data}`)
  //   }

  //   //post
  //  postitem(data:any){
  //   return this.http.post("http://localhost:5000/items/putitem",data)
  //  }
  //  //get
  //  getitem(){
  //    return this.http.get("http://localhost:5000/items")
  //  }
  //  //single item
  //  fintitem(data:any){
  //   return this.http.get(`http://localhost:5000/items/${data}`)
  //  }
  // //
  //  postbill(data:any){ 
  //   return this.http.post("http://localhost:5000/bill/postbill",data)
  // }
  apigetcall(){
    return this.http.get("https://temp-node-express-mongodb.herokuapp.com/users")
   }
   //post
   apipostcall(data:any){
     return this.http.post("https://temp-node-express-mongodb.herokuapp.com/users/createuser",data)
    }
    //find by id
    findbyid(data:any){
     return this.http.get(`https://temp-node-express-mongodb.herokuapp.com/users/${data}`)
    }
    getstudent(){
     return this.http.get("https://temp-node-express-mongodb.herokuapp.com/student")
    }
    //post
    poststudent(data:any){
      return this.http.post("https://temp-node-express-mongodb.herokuapp.com/student/poststudent",data)
     }
     //find by id
     findstudent(data:any){
      return this.http.get(`https://temp-node-express-mongodb.herokuapp.com/student/${data}`)
     }
 
     //post
    postitem(data:any){
     return this.http.post("https://temp-node-express-mongodb.herokuapp.com/items/putitem",data)
    }
    //get
    getitem(){
      return this.http.get("https://temp-node-express-mongodb.herokuapp.com/items")
    }
    //single item
    fintitem(data:any){
     return this.http.get(`https://temp-node-express-mongodb.herokuapp.com/items/${data}`)
    }
   //
    postbill(data:any){ 
     return this.http.post("https://temp-node-express-mongodb.herokuapp.com/bill/postbill",data)
   }
}
