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

  public qrdata: string = null;
  public userIdDto: IdDto = {"id": this.loginService.loggedUser.id};

  // constructor(private qrGenerateService: QrGenerateService) {
  //   console.log('QrGenerateComponent running');
  //   this.qrdata = 'f9g5b316-128c-4865-b606-2de686239054U';
  //   this.updateQrStream();
  // }

  constructor(private qrGenerateService: QrGenerateService, private loginService: LoginService) {
    console.log('QrGenerateComponent running');
    this.qrdata = 'f9g5b316-128c-4865-b606-2de686239054U';
    // this.userIdDto.id = this.loginService.loggedUser.id;
    this.updateQrStream();
  }

  updateQrStream(): void {
    console.log(this.userIdDto.id);
    this.qrGenerateService.sendUserIdToService(this.userIdDto).subscribe(
      (result) => {
        console.log(result.code);
        this.qrdata = result.code;
      }
    );
  }




}
