import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login-success',
  templateUrl: './login-success.component.html',
  styleUrls: ['./login-success.component.css']
})
export class LoginSuccessComponent implements OnInit {

  gruessen =  "Hello ";

  constructor(private loginService : LoginService) {
    this.gruessen += this.loginService.loggedUser.name;
  }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.loggedUser = null;
  }
}
