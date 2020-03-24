import { Component, OnInit } from '@angular/core';
import {RegisterService} from '../services/register.service';
import {QrGenerateService} from '../services/qr-generate.service';
import {IdDto} from '../interfaces/id-dto';
import {CodeDto} from '../interfaces/code-dto';

@Component({
  selector: 'app-qr-generate',
  templateUrl: './qr-generate.component.html',
  styleUrls: ['./qr-generate.component.css']
})
export class QrGenerateComponent {

  public qrdata: string = null;
  public userIdDto: IdDto = {"id": 5};

  constructor(private qrGenerateService: QrGenerateService) {
    console.log('QrGenerateComponent running');
    this.qrdata = 'no code from server';
    this.updateQrStream();
  }

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
