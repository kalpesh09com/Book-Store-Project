import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  //show list of books
  getBookData() {
    return this.httpclient.get("http://localhost:8080/book");
  }

  //user registration
  saveData(data){
    return this.httpclient.post("http://localhost:8080/save",data)
  }

  //check user is exits or not
  login(data){
    return this.httpclient.post("http://localhost:8080/check",data);
  }

  //get user by there user id
  getDataById(id){
    return this.httpclient.get("http://localhost:8080/userById/"+id)
  }
}
