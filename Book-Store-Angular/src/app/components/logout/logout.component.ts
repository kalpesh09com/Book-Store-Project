import { Component, OnInit } from '@angular/core';
import {AuthenauthenticationService} from '../../services/authenauthentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authentocationService: AuthenauthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.authentocationService.logout();
    this.router.navigate(['']).then();
  }

}
