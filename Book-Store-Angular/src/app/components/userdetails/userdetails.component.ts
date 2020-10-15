import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {OrderdetailsService} from '../../services/orderdetails.service';
import {AuthenauthenticationService} from '../../services/authenauthentication.service';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private userservice: UserService ,
              public loginservice: AuthenauthenticationService,
              public orderservice: OrderdetailsService,
              private bookservice: BookService,
              private router: Router,
              private activatedroute: ActivatedRoute) { }

  userid = sessionStorage.getItem('userid');
  user:any=[];

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
  }

}
