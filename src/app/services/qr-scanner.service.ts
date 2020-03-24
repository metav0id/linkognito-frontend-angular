import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { NewConnectionDto } from '../interfaces/new-connection-dto';
import {SuccessDto} from '../interfaces/success-dto';
import {User} from '../interfaces/user';
import {IdDto} from '../interfaces/id-dto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrScannerService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  private urlService = 'https://linkogservices.herokuapp.com/user/createconnection';
  qrStream: string = null;

  constructor(private http: HttpClient) { }

  addScannId(scannId: number){
    return this.http.post('http://localhost:8080/user', scannId);
  }

  sendNewConnectionToService(newConnectionDTO: NewConnectionDto) {
    this.qrStream = newConnectionDTO.code;
    return this.http.post<SuccessDto>(this.urlService, newConnectionDTO);
  }
}
