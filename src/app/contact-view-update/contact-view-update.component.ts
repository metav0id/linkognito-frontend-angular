import { Component, OnInit, Input } from '@angular/core';
import { ContactInterface } from '../interfaces/contact.interface';
import { ActivatedRoute} from "@angular/router";
import { Location} from "@angular/common";
import { ContactViewService} from "../services/contact-view.service";

@Component({
  selector: 'app-contact-view-update',
  templateUrl: './contact-view-update.component.html',
  styleUrls: ['./contact-view-update.component.css']
})
export class ContactViewUpdateComponent implements OnInit {

  contact: ContactInterface;
  contacts: ContactInterface[];

  constructor(
    private route: ActivatedRoute,
    private contactViewService: ContactViewService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getContact();

  }

  editContact(): void {
    this.contactViewService.updateContact(this.contact)
      .subscribe(() => this.goBack());
  }

  getContacts(): void {
    this.contactViewService.getContacts().subscribe(contacts => this.contacts = contacts);
  }

  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactViewService.getContact(id).subscribe(contact => this.contact = contact);
  }

  deleteContact(): void {
    this.getContacts();
    this.contacts.filter(c => c !== this.contact);
    this.contactViewService.deleteContact(this.contact).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
