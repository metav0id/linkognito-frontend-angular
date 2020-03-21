import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {

  currentDevice: MediaDeviceInfo = null;
  qrStream: string;
  hasPermission: boolean;



  constructor() { }

  ngOnInit(): void {
  }

  onCodeResult(resultString: string): void {
    this.qrStream = resultString;
  }

  onHasPermission(has: boolean): void {
    this.hasPermission = has;
  }

}
