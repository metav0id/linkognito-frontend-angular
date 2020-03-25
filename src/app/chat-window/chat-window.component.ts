import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatMessage} from "../interfaces/chat-message";
import {HttpClient} from "@angular/common/http";
import {from, interval, observable, Observable} from "rxjs";
import {startWith, switchMap} from "rxjs/operators";
import {ChatApiServiceService} from "../services/chat-api-service.service";
import { ContactViewService} from "../services/contact-view.service";
import {ActivatedRoute} from "@angular/router";
import {ContactInterface} from "../interfaces/contact.interface";
import {LoginService} from '../services/login.service';


@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit, OnDestroy {

  private readonly UPDATE_CYCLE_IN_MILLISECONDS: number = 5000;
  messagesList: ChatMessage[] = [];
  newMessage: ChatMessage = { name: '', id: 0, addressId: 0, text: '', time: '' };

  myUserID: number;
  addressId: number;
  contactObject: ContactInterface;

  //TEST 25.3.
  subscription;

  constructor(
    private httpClient: HttpClient,
    private apiService: ChatApiServiceService,
    private contactViewService: ContactViewService,
    private router: ActivatedRoute,
    private loginService: LoginService
  ) {
  }

  //**on load all chat messages are called by REST API and
  //update cycle is started
  ngOnInit(): void {
    //ToDO Differentiate by clientID

    this.myUserID = this.loginService.loggedUser.id;
    console.log("myUserID = " + this.myUserID);

    this.router.paramMap.subscribe(params => {
      this.addressId = Number(params.get('addressId'));
    })

    console.log("AddressId = " + this.addressId);

    // this.contactViewService.getContact(this.addressId).subscribe(res => {
    //   this.contactObject = res;
    //   console.log(this.contactObject.id);
    // });
    // this.newMessage.id = this.contactObject.id;
    // this.newMessage.addressId = this.contactObject.addressId;
    // this.newMessage.name = this.contactObject.nickname;
    // console.log(this.newMessage);
    let newRequest: ChatMessage = {id: this.myUserID, addressId: this.addressId};

    this.apiService.loadMessages(newRequest).subscribe(messages => this.messagesList = messages);
    this.checkForNewMessage();
  }

  //**when leaving chat all is unsubscribed
  ngOnDestroy(): void {
    console.log("Unsubscribed from chatroom");
    this.subscription.unsubscribe();
  }

  //**Message will be sent to Service Module via REST-API
  sendMessage(){
    let today = new Date();
    let timestamp = today.getDay()+"."+today.getMonth()+"."+today.getFullYear()+" "+today.getHours()+":"+today.getMinutes();
    console.log(timestamp);
    this.newMessage.time = timestamp;
    this.newMessage.id = this.myUserID;
    this.newMessage.addressId = this.addressId;

    this.messagesList.push(this.newMessage);
    this.apiService.sendMessage(this.newMessage).subscribe(()=> console.log("Message sent from frontend"));
  }

  //ToDO Differentiate by clientID
  //**Receive single messages from Server by checking in interval
  checkForNewMessage(){
    console.log(this.addressId);
    let newRequest: ChatMessage = {id: this.myUserID, addressId: this.addressId};

    this.subscription = interval(this.UPDATE_CYCLE_IN_MILLISECONDS).pipe(
      switchMap(() => this.apiService.getNewMessages(newRequest))
    ).subscribe(messages => {
      console.log(messages);
      this.messagesList = this.messagesList.concat(messages);
    })
  }
}
