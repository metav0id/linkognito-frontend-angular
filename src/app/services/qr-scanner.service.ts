import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NewConnectionDto } from '../interfaces/new-connection-dto';
import {SuccessDto} from '../interfaces/success-dto';

@Injectable({
  providedIn: 'root'
})
export class QrScannerService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  private urlService = 'https://linkogservices.herokuapp.com/user/createconnection';


  constructor(private http: HttpClient) { }

  sendNewConnectionToService(newConnectionDTO: NewConnectionDto) {
    return this.http.post<SuccessDto>(this.urlService, newConnectionDTO);
  }

}
