import { Component, OnInit } from '@angular/core';
import {ChatMessage} from "../interfaces/chat-message";
import {HttpClient} from "@angular/common/http";
import {from, interval, observable, Observable} from "rxjs";
import {startWith, switchMap} from "rxjs/operators";
import {ChatApiServiceService} from "../services/chat-api-service.service";
import { ContactViewService} from "../services/contact-view.service";

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


  constructor(private httpClient: HttpClient, private apiService: ChatApiServiceService, private contactViewService: ContactViewService) { }

  //**on load all chat messages are called by REST API and
  //update cycle is started
  ngOnInit(): void {
    //ToDO Differentiate by clientID

    this.apiService.loadMessages().subscribe(messages => this.messagesList = messages);
    this.checkForNewMessage();
  }

  //**Message will be sent to Service Module via REST-API
  sendMessage(){
   //TODO implement REST API Call to send message to Service module
    console.log(this.newMessage);
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
