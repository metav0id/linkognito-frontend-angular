import { Component, OnInit } from '@angular/core';
import {User} from "../interfaces/user";
import {LoginService} from "../services/login.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  getUserObservable: Observable<User>;


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(this.user);
    this.getUserObservable = this.loginService.getUserObservable;
    this.getUserObservable.subscribe(
      (result) => {this.user = result}
    )

    if(this.user){
      //TODO: Show page
    } else {
      //TODO: WARNING
    }
  }
}
