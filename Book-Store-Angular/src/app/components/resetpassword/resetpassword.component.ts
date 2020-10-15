import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private userservice:UserService,
              private router: Router,
              private activatedrouter: ActivatedRoute) { }


  resetpassword:FormGroup

  changePassword(){
    if (this.resetpassword.value.password!=this.resetpassword.value.confirmpassword) {
      alert("passwords are not matching")
      this.router.navigateByUrl('/forgot')
    }else{
      this.userservice.changePassword(this.resetpassword.value).subscribe((res)=>{
        alert("Password changed successfully..!")
        console.log(res);
        this.router.navigateByUrl('/login')
      })
    }
  }


  ngOnInit(): void {
    this.resetpassword =new FormGroup({
      phoneno:new FormControl(""),
      email:new FormControl(""),
      pincode:new FormControl(""),
      password:new FormControl(""),
      confirmpassword:new FormControl("")
    })
  }


}
