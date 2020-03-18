import { Component, OnInit } from '@angular/core';
import {ChatMessage} from "../interfaces/chat-message";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit {

  messagesList: ChatMessage[] = [];
  newMessage: ChatMessage = { senderName: '', receiver:0, sender: 0, text: '', timeStamp: '' };

  myUserID : number = 10;

  //TODO implement HTTPClient
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    let myUrl: string = "http://localhost:8080/readNewMessages";
    this.httpClient.get<ChatMessage[]>(myUrl).subscribe(messages => this.messagesList = messages);
   /* this.loadMessages();*/
  }

  //**Message will be loaded from Service Module via REST-API
  loadMessages(){
    console.log("Loading messages...")
    //TODO implement REST API Call
    this.messagesList[0] = { senderName: 'Nga', receiver:5, sender: 10, text: 'Hallo Welt', timeStamp: '19:01-17.03.2020' };
    this.messagesList[1] = { receiver:10, sender: 5, text: 'Hallo Welt', timeStamp: '19:01-17.03.2020' };


  }

  //**Message will be sent to Service Module via REST-API
  sendMessage(){
   //TODO implement REST API Call to send message to Service module
    console.log(this.newMessage);


  }
}
