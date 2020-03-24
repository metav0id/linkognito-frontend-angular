import { Component, OnInit } from '@angular/core';
import {QrScannerService} from '../services/qr-scanner.service';

@Component({
  selector: 'app-success-scann',
  templateUrl: './success-scann.component.html',
  styleUrls: ['./success-scann.component.css']
})
export class SuccessScannComponent implements OnInit {

  qrStream: string = null;


  constructor(private  qrScannerService: QrScannerService) {
    this.qrStream = this.qrScannerService.qrStream;
  }



  ngOnInit(): void {
  }

}
