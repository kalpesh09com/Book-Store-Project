import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenauthenticationService} from '../../services/authenauthentication.service';
import {BookService} from '../../services/book.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {

  constructor(public loginservice: AuthenauthenticationService,
              private bookservice: BookService,
              private router: Router,
              private activatedroute: ActivatedRoute) { }

  book: any = []
  id: number
  form:FormGroup
  userid = sessionStorage.getItem('userid');

  register(){
    if(this.loginservice.isUserLogin()==true){
      sessionStorage.setItem('qt' , this.form.value.quantity);
      this.router.navigate(['/purchase',this.form.value.bookId]);
    }else{
      alert("Login First to place order..!")
      this.router.navigate(['/login']);
    }
  }

  getData() {
    this.activatedroute.params.subscribe((param) => {
      this.id = param["id"]
      this.bookservice.getDataById(this.id).subscribe((data) => {
        this.book = data;
        console.log(this.book)
      })
    })
  }

  ngOnInit(): void {
    this.getData();

    this.form = new FormGroup({
      bookId:new FormControl(this.id),
      quantity:new FormControl("")
    })
  }

}
