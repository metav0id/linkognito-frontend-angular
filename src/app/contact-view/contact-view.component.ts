import { Component, OnInit } from '@angular/core';
import { ContactInterface } from '../interfaces/contact.interface';
import { ContactViewService } from '../services/contact-view.service';
import {NotificationsService} from "../services/notifications.service";


import { MockContacts } from "./MockContacts";
import {QrScannerService} from '../services/qr-scanner.service';


@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  contacts: ContactInterface[];
  chatContact : string [];

  //Test
  id: number = 5;


  getContacts(): void {
    this.contacts = MockContacts;
    // this.contactViewService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  deleteContact(contact: ContactInterface): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactViewService.deleteContact(contact).subscribe();
  }

  constructor(private contactViewService: ContactViewService, private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.getContacts();
  }

  // createArray(contact) {
  //   this.chatContact[0] = contact.id;
  //   this.chatContact[1] = contact.addressId;
  //   this.chatContact[2] = contact.name;
  // }

}
