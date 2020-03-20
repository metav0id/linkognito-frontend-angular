import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ChatMessage} from "../interfaces/chat-message";
import {interval, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatApiServiceService {
  private readonly URL_READ_NEW_MESSAGES: string = "http://localhost:8080/readNewMessages";
  private readonly URL_READ_ALL_MESSAGES: string = "http://localhost:8080/readAllMessages";

  //TODO need to get current userID by session
  private readonly myUserID : number = 10;

  constructor(private httpClient: HttpClient) {
  }

  //**Used for text input
  newMessage: ChatMessage = {name: '', id: 0, addressId: 0, text: '', time: ''};

  ngOnInit(): void {
  }

  //!**All current messages of conversation will be loaded from Service Module via REST-API
  /*loadMessages(): Observable<ChatMessage[]> {
    console.log("Loading messages from Server...");
    return this.httpClient.get<ChatMessage[]>(this.URL_READ_ALL_MESSAGES);
  }*/
  loadMessages(): Observable<ChatMessage[]> {
    console.log("Loading messages from Server...");
    let myUser = {userID : 2};
    return this.httpClient.post<ChatMessage[]>(this.URL_READ_ALL_MESSAGES, myUser);
  }

  //!**Message will be sent to Service Module via REST-API
  sendMessage(){
    //TODO implement REST API Call to send message to Service module
    console.log(this.newMessage);
  }

  //!**Is called by function checkForNewMessage() to call Server Api
  public getNewMessages(): Observable<ChatMessage[]>{
    return this.httpClient.post<ChatMessage[]>(this.URL_READ_NEW_MESSAGES, null);
  }
}
