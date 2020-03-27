import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../services/register.service';
import {QrGenerateService} from '../services/qr-generate.service';
import {IdDto} from '../interfaces/id-dto';
import {CodeDto} from '../interfaces/code-dto';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-qr-generate',
  templateUrl: './qr-generate.component.html',
  styleUrls: ['./qr-generate.component.css']
})
export class QrGenerateComponent{

  public qrdata: string = null; //Qr-Stream will be generated to Qr-Code
  public userIdDto: IdDto = {"id": this.loginService.loggedUser.id}; //Json with Current-User-Id

  constructor(private qrGenerateService: QrGenerateService, private loginService: LoginService) {
    console.log('QrGenerateComponent running');
    this.qrdata = 'no code from server';
    this.updateQrStream();
  }

  /**
   * Current User-ID will be sent to Service-Modul
   * which responds with the appropriate Qr-Stream.
  * */
  updateQrStream(): void {
    console.log(`this.userIdDto.id = ${this.userIdDto.id}`);
    this.qrGenerateService.sendUserIdToService(this.userIdDto).subscribe(
      (result) => {
        console.log(`result.code = ${result.code}`);
        this.qrdata = result.code;
      }
    );
  }


}
