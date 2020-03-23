import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewConnectionDto } from '../interfaces/new-connection-dto';

@Injectable({
  providedIn: 'root'
})
export class QrScannerService {

  private urlService = 'https://linkogservices.herokuapp.com/user/createconnection';

  constructor(private http: HttpClient) { }

  sendNewConnectionToService(newConnectionDTO : NewConnectionDto) {
    return this.http.post<NewConnectionDto>(this.urlService, newConnectionDTO);
  }

}
