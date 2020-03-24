import { Component, OnInit } from '@angular/core';
import {ChatMessage} from "../interfaces/chat-message";
import {HttpClient} from "@angular/common/http";
import {from, interval, observable, Observable} from "rxjs";
import {startWith, switchMap} from "rxjs/operators";
import {ChatApiServiceService} from "../services/chat-api-service.service";
import { ContactViewService} from "../services/contact-view.service";
import {ActivatedRoute} from "@angular/router";
import {ContactInterface} from "../interfaces/contact.interface";

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {
  private readonly UPDATE_CYCLE_IN_MILLISECONDS: number = 5000;
  messagesList: ChatMessage[] = [];
  newMessage: ChatMessage = { name: '', id: 0, addressId: 0, text: '', time: '' };

  myUserID: number = 10;
  addressId: number;
  contactObject: ContactInterface;

  constructor(private httpClient: HttpClient, private apiService: ChatApiServiceService, private contactViewService: ContactViewService, private router: ActivatedRoute) { }

  //**on load all chat messages are called by REST API and
  //update cycle is started
  ngOnInit(): void {
    //ToDO Differentiate by clientID

    this.apiService.loadMessages().subscribe(messages => this.messagesList = messages);
    this.checkForNewMessage();

    this.router.paramMap.subscribe(params => {
      this.addressId = Number(params.get('addressId'));
    })

    console.log("AddressId = " + this.addressId);

    this.contactViewService.getContact(this.addressId).subscribe(res => this.contactObject = res);
    this.newMessage.id = this.contactObject.id;
    this.newMessage.addressId = this.contactObject.addressId;
    this.newMessage.name = this.contactObject.nickname;
    console.log(this.newMessage);
  }

  //**Message will be sent to Service Module via REST-API
  sendMessage(){
    this.apiService.sendMessage(this.newMessage).subscribe(()=> console.log("Message sent from frontend"));
  }

  //ToDO Differentiate by clientID
  //**Receive single messages from Server by checking in interval
  checkForNewMessage(){
    interval(this.UPDATE_CYCLE_IN_MILLISECONDS).pipe(
      switchMap(() => this.apiService.getNewMessages())
    ).subscribe(messages => {
      this.messagesList = this.messagesList.concat(messages);
    })
  }

}
