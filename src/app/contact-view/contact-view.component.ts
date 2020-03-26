import { Component, OnInit } from '@angular/core';
import { ContactInterface } from '../interfaces/contact.interface';
import { ContactViewService } from '../services/contact-view.service';
import {NotificationsService} from "../services/notifications.service";
import {LoginService} from '../services/login.service';
import {User} from "../interfaces/user";

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {

  contacts: ContactInterface[];
  public user: User = this.loginService.loggedUser;

  //Test
  id: number = 5;


  getContacts(): void {
    this.contactViewService.getContacts().subscribe(contacts => this.contacts = contacts);
    console.log(this.contacts);
  }

  constructor(private contactViewService: ContactViewService,
              private notificationsService: NotificationsService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.getContacts();
  }

}
