import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private userService: UserService ,
              private router: Router) { }

  userForm:FormGroup

  register(){
    this.userService.saveData(this.userForm.value).subscribe((res)=>{
      alert("User Created Successfully...!")
      this.router.navigate(['']);
      console.log(this.userForm.value)
    })
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName:new FormControl(""),
      phoneno:new FormControl(""),
      password:new FormControl(""),
      email:new FormControl(""),
      addressLine1:new FormControl(""),
      addressLine2:new FormControl(""),
      city:new FormControl(""),
      pincode:new FormControl("")
    })
  }

}
