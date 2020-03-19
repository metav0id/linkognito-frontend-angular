import { Injectable } from '@angular/core';
import { ContactInterface } from '../interfaces/contact.interface';
import { CONTACTS } from '../contact-view/mock-contacts';
import { Observable, of } from 'rxjs';
import { NotificationsService} from "./notifications.service";

@Injectable({
  providedIn: 'root'
})
export class ContactViewService {

  constructor(private notificationsService: NotificationsService) { }

  getContacts(): Observable<ContactInterface[]> {
    this.notificationsService.add('Contacts fetched from Database')
    return of (CONTACTS);
  }

  getContact(id:number): Observable<ContactInterface>{
    this.notificationsService.add('Contact selected');
    return of(CONTACTS.find(contact => contact.id === id));
  }
}
