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
    if(this.newUser.email != "" && this.newUser.password.length >= 8){
      this.registerService.addNewUser(this.newUser).subscribe(
        (result) => {
          this.registerService.sendNewUserToService(result).subscribe(
            (result) => {
              console.log(result.code);
            }
          );
        }
      );
    }
  }
}
