import {Injectable, OnInit} from '@angular/core';
import {User} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  find(user: User) {
    return this.http.post('http://localhost:8080/login', user);
  }
}
