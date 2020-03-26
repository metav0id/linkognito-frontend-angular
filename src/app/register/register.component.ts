import { Component, OnInit } from '@angular/core';
import {User} from "../interfaces/user";
import {RegisterService} from "../services/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser : User = {name: "", password: "", email: "", age : 0, geschecht: ""};
  failRegister = false;

  constructor(private registerService: RegisterService,  private router: Router) { }

  ngOnInit(): void {
  }


  addNewUSer() {
    if(this.newUser.email != "" && this.newUser.password.length >= 8){
      this.registerService.addNewUser(this.newUser).subscribe(
        (result) => {
          if(result != null){
            console.log(result.id)
            this.registerService.sendNewUserToService(result).subscribe(
              (result) => {
                console.log(result.code);
              }
            );
            this.router.navigate(['/login']);
          } else {
            this.failRegister = true;
          }
        }
      );
    }
  }

  formClick() {
    this.failRegister = false;
  }
}
