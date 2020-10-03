import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenauthenticationService {

  constructor() { }


  authenticate(data){
    if(data!=null){
      sessionStorage.setItem('userid', data.userId)
      return true;
    }else{
      return false;
    }
  }

  //check user login
  isUserLogin(){
    let user = sessionStorage.getItem('userid');
    console.log(!(user===null))
    return !(user===null)
  }

  //ending the session of user
  logout(){
    sessionStorage.removeItem('userid');
  }

}
