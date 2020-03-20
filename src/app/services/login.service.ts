import {Injectable, OnInit} from '@angular/core';
import {User} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  getUserObservable: Observable<User>;
  urlUser = 'http://localhost:8080/user'

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  login(user: User) {
    //TODO: find the id, then: this.urlUser += ?id
    this.getUserObservable = this.http.get<User>(this.urlUser)
  }
}
