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

  private getContactsUrl = 'http://localhost:8080/readAllContacts';
  private getSingleContactUrl = 'http://localhost:8080/readContact';
  private updateContactUrl = 'http://localhost:8080/updateContact';
  private deleteContactUrl = 'http://localhost:8080/deleteContact';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  constructor(private http: HttpClient, private notificationsService: NotificationsService) { }

  /** log to save notifications:
   * auto-delete should be implemented for final version, current process is useful for
   * debiugging purposes */

  private log(notification: string) {
    this.notificationsService.add(`${notification}`);
  }

  /** GET-Method for contact-list*/

  getContacts(): Observable<ContactInterface[]> {


    return this.http.get<ContactInterface[]>(this.getContactsUrl)
      .pipe(
        tap(_ => this.log('loaded contacts from database')),
        catchError(this.handleError<ContactInterface[]>('getContacts()', []))
      );
  }

  //ToDo: Implement GET-method for external services db which will
  // be executed whenever app is started.


  /** GET-Method for single contact*/

  getContact(id:number): Observable<ContactInterface>{
    const url = `${this.getSingleContactUrl}/${id}`;
    return this.http.get<ContactInterface>(url).pipe(
      tap(_ => this.log(`loaded contact id=${id} details`)),
      catchError(this.handleError<ContactInterface>(`getContact id=${id}`))
    );
  }

  /** PUT-Method for single contact*/

  updateContact (contact: ContactInterface): Observable<any> {
    return this.http.put(this.updateContactUrl, contact, this.httpOptions).pipe(
      tap(_ => this.log(`updated contact id=${contact.id}`)),
      catchError(this.handleError<any>('updateContact'))
    );
  }

  /** DELETE-Method for single contact*/

  deleteContact(contact: ContactInterface): Observable<ContactInterface> {
    const id = typeof contact === 'number' ? contact : contact.id;
    const url = `${this.deleteContactUrl}/${id}`;

   return this.http.delete<ContactInterface>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted contact id=${id}`)),
      catchError(this.handleError<ContactInterface>('deleteContact'))
    );
  }

  /** ADD-Methode noch nicht implementiert. Zuarbeit von QR-Code noch unklar */

  addContact(contact: ContactInterface): Observable<ContactInterface> {
    // ToDo: add contact logic
    return null;
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
