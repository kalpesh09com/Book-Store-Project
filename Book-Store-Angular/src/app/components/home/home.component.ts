import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../services/book.service';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookservice: BookService ,
              private userservice: UserService,
              private activatedroute: ActivatedRoute) { }

  book:any = []
  user:any;
  userid = sessionStorage.getItem('userid');

  getBookData(){
    this.bookservice.getBookData().subscribe((res)=>{
      this.book=res;
      console.log(this.userid);
    })
  }

  getUserData(){
    if(this.userid!=null){
      this.userservice.getDataById(this.userid).subscribe((data) => {
        this.user = data;
        console.log(this.user)
      })
    }
  }

  ngOnInit(): void {
    this.getUserData()
    this. getBookData()
  }

}
