import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-generate',
  templateUrl: './qr-generate.component.html',
  styleUrls: ['./qr-generate.component.css']
})
export class QrGenerateComponent {

  public qrdata: string = null;

  constructor() {
    console.log('QrGenerateComponent running');
    this.qrdata = 'Qr-Stream example';
  }

}
