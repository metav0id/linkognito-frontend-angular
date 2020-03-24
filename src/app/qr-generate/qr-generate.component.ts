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
    this.qrdata = 'f9g5b316-128c-4865-b606-2de686239054U';
    this.updateQrStream();
  }

  updateQrStream(): void {
    this.qrGenerateService.sendUserIdToService(this.userIdDto).subscribe(
      (result) => {
        console.log(result.code);
        this.qrdata = result.code;
      }
    );
  }


}
