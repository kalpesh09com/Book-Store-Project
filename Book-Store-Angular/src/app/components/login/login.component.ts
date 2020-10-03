import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../services/user.service';
import {AuthenauthenticationService} from '../../services/authenauthentication.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice : AuthenauthenticationService,
              private userService: UserService,
              private router: Router) { }

  userForm:FormGroup
  data :any = [];
  invalidLogin = false;


  register(){
    this.userService.login(this.userForm.value).subscribe((res)=>{
      this.data=res;
      if(this.loginservice.authenticate(res)){
        this.router.navigate(['']);
        this.invalidLogin = false
      }else{
        this.invalidLogin=true;
      }
    })
  }


  ngOnInit(): void {
    this.userForm = new FormGroup({
      phoneno:new FormControl(""),
      password:new FormControl("")
    })
  }

}
