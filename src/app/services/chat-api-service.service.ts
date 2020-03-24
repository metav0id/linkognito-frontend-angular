import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ChatMessage} from "../interfaces/chat-message";
import {interval, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatApiServiceService {
  private readonly URL_READ_NEW_MESSAGES: string = "http://localhost:8080/readNewMessages";
  private readonly URL_READ_ALL_MESSAGES: string = "http://localhost:8080/readAllMessages";
  private readonly URL_SEND_NEW_MESSAGE: string = "http://localhost:8080/sendMessage";

  //TEST 24.03.
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  //TODO need to get current userID by session
  //private readonly myUserID : number = 10;
  private newMessage: ChatMessage = {name: '', id: 0, addressId: 0, text: '', time: ''};

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  //!**All current messages of conversation will be loaded from Service Module via REST-API
  loadMessages(): Observable<ChatMessage[]> {
    console.log("Loading messages from Server...");
    //TODO implement getting user id and address id from contact list
    let myUser = {id : 2, addressId: 10};
    return this.httpClient.post<ChatMessage[]>(this.URL_READ_ALL_MESSAGES, myUser);
  }

  //!**Is called by function checkForNewMessage() to call Server Api
  public getNewMessages(): Observable<ChatMessage[]>{
    //TODO implement getting user id and address id from contact list
    let myUser = {id : 2, addressId: 10};
    return this.httpClient.post<ChatMessage[]>(this.URL_READ_NEW_MESSAGES, myUser);
  }

  //!**Message will be sent to Service Module via REST-API
  public sendMessage(newChatMessage : ChatMessage): Observable<any>{
    //TODO implement getting user id and address id from contact list
    newChatMessage.id = 10;
    newChatMessage.addressId = 5;
    newChatMessage.name = "Enrico"
    console.log(newChatMessage);
    console.log(this.URL_SEND_NEW_MESSAGE);
    return this.httpClient.post(this.URL_SEND_NEW_MESSAGE,newChatMessage, this.httpOptions);
  }
}
