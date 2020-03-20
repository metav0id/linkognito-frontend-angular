import { Injectable } from '@angular/core';
import { ContactInterface } from '../interfaces/contact.interface';
import { Observable, of } from 'rxjs';
import { NotificationsService} from "./notifications.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ContactViewService {

  private contactsUrl = 'api/contacts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private notificationsService: NotificationsService) { }

  private log(notification: string) {
    this.notificationsService.add(`${notification}`);
  }

  getContacts(): Observable<ContactInterface[]> {
    return this.http.get<ContactInterface[]>(this.contactsUrl)
      .pipe(
        tap(_ => this.log('loaded contacts from database')),
        catchError(this.handleError<ContactInterface[]>('getContacts()', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error : any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getContact(id:number): Observable<ContactInterface>{
    const url = `${this.contactsUrl}/${id}`;
    return this.http.get<ContactInterface>(url).pipe(
      tap(_ => this.log(`loaded contact id=${id}`)),
      catchError(this.handleError<ContactInterface>(`getContact id=${id}`))
    );
  }

  /** PUT-Method */

  updateContact (contact: ContactInterface): Observable<any> {
    return this.http.put(this.contactsUrl, contact, this.httpOptions).pipe(
      tap(_ => this.log(`updated contact id=${contact.id}`)),
      catchError(this.handleError<any>('updateContact'))
    );
  }

  /** DELETE-Method */
  deleteContact (contact: ContactInterface): Observable<ContactInterface> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.contactsUrl}/${id}`;

   return this.http.delete<ContactInterface>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted contact id=${id}`)),
      catchError(this.handleError<ContactInterface>('deleteContact'))
    );
  }

  addContact(contact: ContactInterface): Observable<ContactInterface> {
    return null;
  }
}
