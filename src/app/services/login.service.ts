import {Injectable, OnInit} from '@angular/core';
import {User} from "../interfaces/user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  loggedUser : User;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  login(user: User): Observable<User>{
   return this.http.post<User>('https://user-modul-menv.herokuapp.com/login', user)
  }
}
