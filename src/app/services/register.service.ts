import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../interfaces/user";
import {IdDto} from "../interfaces/id-dto";
import {CodeDto} from "../interfaces/code-dto";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) {}

  addNewUser(newUser: User){
    return this.http.post<IdDto>('http://localhost:8080/registration', newUser);
  }

  sendNewUserToService(idDto : IdDto) {
    return this.http.post<CodeDto>('https://linkogservices.herokuapp.com/user/registration', idDto);
  }
}
