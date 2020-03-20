import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ContactInterface} from "./interfaces/contact.interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb() {
    const contacts = [
      {id: 1, name: 'MeraLunaChick (Morticia???)', qrcode: 'abcdefg', active: true},
      {id: 2, name: 'HurricaneDude (drunken fin)', qrcode: 'abcdefg', active: true},
      {id: 3, name: 'DeichbrandAffair', qrcode: 'abcdefg', active: true},
      {id: 4, name: 'Friseur ScissorBros (Bartwig)', qrcode: 'abcdefg', active: true},
      {id: 5, name: 'Fensterputzer (Harry)', qrcode: 'abcdefg', active: true},
      {id: 15, name: 'Typ vom Würstchenstand', qrcode: 'abcdefg', active: true},
      {id: 16, name: 'Scherenschleifer (aufsässigen Sohn)', qrcode: 'abcdefg', active: true},
      {id: 17, name: 'Gegner Verkehrsunfall Ecke Steilshooper Allee', qrcode: 'abcdefg', active: true},
      {id: 18, name: 'Gegner Verkehrsunfall Saseler Chaussee', qrcode: 'abcdefg', active: true},
      {id: 19, name: 'Sexy Bedienung ausm Mandalay', qrcode: 'abcdefg', active: true},
      {id: 20, name: 'Anwältin Verkehrsrecht (U1 Kellinghusenstraße)', qrcode: 'abcdefg', active: true}
    ];
    return {contacts};
  }

  genId(contacts: ContactInterface[]): number {
    return contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1: 11;
  }

  constructor() { }
}
