import { Component, OnInit } from '@angular/core';
import { QrScannerService } from '../services/qr-scanner.service';
import { NewConnectionDto } from '../interfaces/new-connection-dto';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  currentDevice: MediaDeviceInfo = null;
  hasPermission: boolean;
  qrStream: string;
  newConnection: NewConnectionDto = {"id":10 , "code":"string"};


  constructor(private qrScannerService: QrScannerService) { }

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
          console.log(result.adressId);
        }
      );
    }
  }
}
