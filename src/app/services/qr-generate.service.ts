import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user';
import {IdDto} from '../interfaces/id-dto';
import {CodeDto} from '../interfaces/code-dto';

@Injectable({
  providedIn: 'root'
})
export class QrGenerateService {

  private urlService = 'https://linkogservices.herokuapp.com/user/createconnection';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient) {}

  sendUserIdToService(idDto : IdDto) {
    return this.http.post<CodeDto>(this.urlService, idDto);
  }

}
