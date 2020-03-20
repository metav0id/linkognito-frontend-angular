import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  /**
   * to implement notifications-service:
   * import in component, call 'add'-function to add text
   *
   */

  notifications: string[] = [];

  add(notification: string) {
    this.notifications.push(notification)
  }

  clear() {
    this.notifications =  [];
  }

  constructor() { }
}
