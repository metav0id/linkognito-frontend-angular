import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showRegistrierung = false;

  constructor() { }

  ngOnInit(): void {
  }

  toogleLogin(){
    this.showRegistrierung = false;
  }
  toogleShowRegistierung(){
    this.showRegistrierung = true;
  }

}
