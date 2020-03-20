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




  getContact(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.contactViewService.getContact(id).subscribe(contact => this.contact = contact);
  }


  goBack(): void {
    this.location.back();
  }

}
