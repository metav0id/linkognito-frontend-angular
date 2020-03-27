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

  /**
   * Initiate the elements of the new Contact after a successful Qr-scan
   * */
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


  /**
   * After a successful Qr-scan the appropriate Qr-Stream will be saved
   * and a new Connection will be sent to Service-Team.
   * */
  onCodeResult(resultString: string): void {
    this.qrStream = resultString;
    this.checkScann();
  }

  /**
   * Activate the scanner after permission
   * */
  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }


  /**
   * Send new Connection to Service-Team if the Qr-Scann occurs
   * and navigate to success-scan page.
   * */
  checkScann(){
    if (this.qrStream){
      this.sendNewConnectionToService();
      this.router.navigate(['/successScann']);
    }
  }


  /**
   * Send new Connection with Qr-Stream to Service-Team which responds with the appropriate Address-Id.
   * The new contact data will be saved in the local database of User-Modul.
   * */
  sendNewConnectionToService (){
      this.newConnection.code = this.qrStream;

      // Send new Connection with Qr-Stream to Service-Team
      this.qrScannerService.sendNewConnectionToService(this.newConnection).subscribe(

        //response with the appropriate Address-Id
        (result) => {
          console.log(`result.addressId = ${result.addressId}`);
          console.log(result.addressId);
          this.initContact(result.addressId);

          // Save addressId in local database
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
