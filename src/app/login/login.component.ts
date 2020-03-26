import { Component, OnInit } from '@angular/core';
import {User} from "../interfaces/user";
import {LoginService} from "../services/login.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {email : "", password: ""};

  loginfailed = false;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  formClick(){
    this.loginfailed = false;
  }
  login(){
    this.loginService.login(this.user).subscribe(
      (returnUser) => {
        if(returnUser != null){
          this.loginService.loggedUser = returnUser;
          this.router.navigate(['/home']);
        } else {
          this.loginfailed = true;
          this.user = {email : "", password: ""};
        }
      }
    );
  }
}
