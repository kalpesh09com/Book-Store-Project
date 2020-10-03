import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {OrderdetailsService} from '../../services/orderdetails.service';
import {AuthenauthenticationService} from '../../services/authenauthentication.service';
import {BookService} from '../../services/book.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-purchasebook',
  templateUrl: './purchasebook.component.html',
  styleUrls: ['./purchasebook.component.css']
})
export class PurchasebookComponent implements OnInit {

  constructor(public loginservice: AuthenauthenticationService,
              public orderservice: OrderdetailsService,
              private bookservice: BookService,
              private router: Router,
              private activatedroute: ActivatedRoute) { }

  userid = sessionStorage.getItem('userid');
  quantity = sessionStorage.getItem('qt')

  book: any = [];
  id: number;
  purchaseForm: FormGroup;
  orderdetails: any = [];


  register() {
    this.orderservice.saveData(this.purchaseForm.value).subscribe((res) => {
      alert("Order placed Successfully..!")
      this.orderdetails = res;
      this.router.navigateByUrl('/')
    })
  }


  getData() {
    this.activatedroute.params.subscribe((param) => {
      this.id = param["id"]
      this.bookservice.getDataById(this.id).subscribe((data) => {
        this.book = data;
      })
    })
  }


  ngOnInit(): void {
    this.getData()
    this.purchaseForm = new FormGroup({
      bookId: new FormControl(this.id),
      userName: new FormControl(""),
      phoneno: new FormControl(""),
      address: new FormControl(""),
      quantity: new FormControl(this.quantity)
    })
  }

}
