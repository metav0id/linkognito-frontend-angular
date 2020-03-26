import { Component, OnInit } from '@angular/core';
import { QrScannerService } from '../services/qr-scanner.service';
import { NewConnectionDto } from '../interfaces/new-connection-dto';
import {LoginService} from '../services/login.service';
import {log} from 'util';
import {ContactViewService} from '../services/contact-view.service';
import {ContactInterface} from '../interfaces/contact.interface';
import {Router} from '@angular/router';




@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  currentDevice: MediaDeviceInfo = null;
  hasPermission: boolean;
  qrStream: string;
  newConnection: NewConnectionDto = {"id":0 , "code":"string"};
  contactInterface: ContactInterface;

  constructor(
    private qrScannerService: QrScannerService,
    private loginService: LoginService,
    private contactViewService: ContactViewService,
    private router: Router
    ){
    this.newConnection.id = loginService.loggedUser.id;
  }

  ngOnInit(): void {
  }

  initContact(scannId: number) {
    this.contactInterface = {
      "id": this.loginService.loggedUser.id,
      addressId: scannId,
      "name": "new contact",
      qrcode: this.qrStream,
      active: true,
      nickname: this.loginService.loggedUser.name
    };
  }

  logContactInterface() {
    console.log(`this.contactInterface.id = ${this.contactInterface.id}`);
    console.log(`this.contactInterface.name = ${this.contactInterface.name}`);
    console.log(`this.contactInterface.addressId = ${this.contactInterface.addressId}`);
    console.log(`this.contactInterface.nickname = ${this.contactInterface.nickname}`);
    console.log(`this.contactInterface.qrcode = ${this.contactInterface.qrcode}`);
    console.log(`this.contactInterface.active = ${this.contactInterface.active}`);

  }

  onCodeResult(resultString: string): void {
    this.qrStream = resultString;
    this.checkScann();
  }

  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }

  checkScann(){
    if (this.qrStream){
      this.sendNewConnectionToService();
      this.router.navigate(['/successScann']);
    }
  }

  sendNewConnectionToService (){
      this.newConnection.code = this.qrStream;
      console.log(this.newConnection.code);
      this.qrScannerService.sendNewConnectionToService(this.newConnection).subscribe(
        (result) => {
          console.log(`result.addressId = ${result.addressId}`);
          console.log(result.addressId);
          this.initContact(result.addressId);
          this.contactViewService.updateContact(this.contactInterface).subscribe(
            () => {
              console.log('addressId transmitted');
              this.logContactInterface();
            }
          );
        }
      );
    }
}
