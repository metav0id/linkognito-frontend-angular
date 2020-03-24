import { Component, OnInit } from '@angular/core';
import { QrScannerService } from '../services/qr-scanner.service';
import { NewConnectionDto } from '../interfaces/new-connection-dto';
import {LoginService} from '../services/login.service';
import {log} from 'util';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  currentDevice: MediaDeviceInfo = null;
  hasPermission: boolean;
  qrStream: string;
  newConnection: NewConnectionDto = {"id":119 , "code":"string"};

  // constructor(private qrScannerService: QrScannerService) {
  // }

  constructor(private qrScannerService: QrScannerService, private loginService: LoginService) {
    this.newConnection.id = loginService.loggedUser.id;
  }

  ngOnInit(): void {
  }

  onCodeResult(resultString: string): void {
    this.qrStream = resultString;
  }

  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }

  sendNewConnectionToService (){
    if (this.qrStream){
      this.newConnection.code = this.qrStream;
      this.qrScannerService.sendNewConnectionToService(this.newConnection).subscribe(
        (result) => {
          console.log(`result.addressId = ${result.addressId}`);
          console.log(result.addressId);
        }
      );
    }
  }
}
