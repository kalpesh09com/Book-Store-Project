import { Injectable } from '@angular/core';
import {HttpClient , HttpClientModule} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpclient:HttpClient) { }

  //show list of books
  getBookData() {
    return this.httpclient.get("http://localhost:8080/book");
  }

  //show book by book id
  getDataById(id){
    return this.httpclient.get("http://localhost:8080/bookById/"+id)
  }
}
