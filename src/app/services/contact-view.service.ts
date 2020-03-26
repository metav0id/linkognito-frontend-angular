import { Injectable } from '@angular/core';
import { ContactInterface } from '../interfaces/contact.interface';
import { Observable, of } from 'rxjs';
import { NotificationsService} from "./notifications.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";
import {LoginService} from '../services/login.service';
import {User} from "../interfaces/user";



@Injectable({
  providedIn: 'root'
})
export class ContactViewService {

  private readonly USER_URL: string = 'https://user-modul-menv.herokuapp.com';

  private getContactsUrl = this.USER_URL + '/readAllContacts';
  private getSingleContactUrl = this.USER_URL + '/readContact/?id=';
  private updateContactUrl = this.USER_URL + '/updateContact';
  private deleteContactUrl = this.USER_URL + '/deleteContact/?id=';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient,
              private notificationsService: NotificationsService,
              private loginService: LoginService) { }

  /** log to save notifications:
   * auto-delete should be implemented for final version, current process is useful for
   * debiugging purposes */

  private log(notification: string) {
    this.notificationsService.add(`${notification}`);
  }

  /** GET-Method for contact-list*/

  getContacts(): Observable<ContactInterface[]> {
    return this.http.post<ContactInterface[]>(this.getContactsUrl, this.user)
      .pipe(
        tap(_ => this.log('loaded contacts from database')),
        catchError(this.handleError<ContactInterface[]>('getContacts()', []))
      );
  }

  //ToDo: Implement GET-method for external services db which will
  // be executed whenever app is started.


  /** GET-Method for single contact*/

  getContact(id:number): Observable<ContactInterface>{
    const url = `${this.getSingleContactUrl}${id}`;
    return this.http.get<ContactInterface>(url).pipe(
      tap(_ => this.log(`loaded contact id=${id} details`)),
      catchError(this.handleError<ContactInterface>(`getContact id=${id}`))
    );
  }

  /** PUT-Method for single contact (update or add)*/

  updateContact (contact: ContactInterface): Observable<any> {
    return this.http.put(this.updateContactUrl, contact, this.httpOptions).pipe(
      tap(_ => this.log(`updated contact id=${contact.id}`)),
      catchError(this.handleError<any>('updateContact'))
    );
  }

  /** DELETE-Method for single contact*/

  deleteContact (contact: ContactInterface) {
    // deleteContact(contact: ContactInterface | number): Observable<ContactInterface> {
    const url = `${this.deleteContactUrl}`;

    return this.http.post(url, contact, this.httpOptions).pipe(
      tap(_ => this.log(`deleted contact`)),
      catchError(this.handleError<ContactInterface>('deleteContact'))
    );
  }


  /** Error-handling for db-access */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
