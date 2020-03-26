import { Component, OnInit, Input } from '@angular/core';
import { ContactInterface } from '../interfaces/contact.interface';
import { ActivatedRoute} from "@angular/router";
import { Location} from "@angular/common";
import { ContactViewService} from "../services/contact-view.service";
import {LoginService} from '../services/login.service';
import {User} from "../interfaces/user";


@Component({
  selector: 'app-contact-view-update',
  templateUrl: './contact-view-update.component.html',
  styleUrls: ['./contact-view-update.component.css']
})
export class ContactViewUpdateComponent implements OnInit {

  contact: ContactInterface;
  contacts: ContactInterface[];
  public user: User = this.loginService.loggedUser;


  constructor(
    private route: ActivatedRoute,
    private contactViewService: ContactViewService,
    private location: Location,
    private loginService: LoginService)
  {}

  ngOnInit(): void {
    this.getContact();

  }

  editContact(): void {
    this.contactViewService.updateContact(this.contact)
      .subscribe(() => this.goBack());
  }

  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactViewService.getContact(id).subscribe(contact => this.contact = contact);
  }

  deleteContact(contact: ContactInterface): void {
    console.log("delete-1")
    this.contactViewService.deleteContact(contact).subscribe(() => this.goBack()) ;
  }

  deactivateContact(): void {
    this.contact.active = false;
    this.editContact();
  }

  goBack(): void {
    this.location.back();
  }

}
