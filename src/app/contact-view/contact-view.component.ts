import { Component, OnInit } from '@angular/core';
import { ContactInterface } from '../interfaces/contact.interface';
import { ContactViewService } from '../services/contact-view.service';
import {NotificationsService} from "../services/notifications.service";


@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  contacts: ContactInterface[];

  getContacts(): void {
    this.contactViewService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  deleteContact(contact: ContactInterface): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactViewService.deleteContact(contact).subscribe();
  }

  constructor(private contactViewService: ContactViewService, private notificationsService: NotificationsService) { }

  ngOnInit() {
    this.getContacts();
  }

  deleteContact(contact: ContactInterface): void {
    this.contacts = this.contacts.filter(c => c !== contact);
    this.contactViewService.deleteContact(contact).subscribe();
  }



}
