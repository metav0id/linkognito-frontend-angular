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

  user: User = {name: "", email : "", password: ""};
  returnObject: Object;
  getUserObservable: Observable<User>;


  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.find(this.user).subscribe((result) => {console.log(result)});

    if(this.returnObject){
      console.log("something")
    } else {
      //TODO: WARNING
    }
  }
}
