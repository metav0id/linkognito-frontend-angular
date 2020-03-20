import { Component, OnInit } from '@angular/core';
import {User} from "../interfaces/user";
import {RegisterService} from "../services/register.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser : User = {name: "", password: "", email: "", age : 0, geschecht: ""};

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }


  addNewUSer() {
    this.registerService.addNewUser(this.newUser).subscribe(() => this.ngOnInit());
  }
}
