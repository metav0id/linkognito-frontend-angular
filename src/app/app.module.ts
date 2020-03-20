import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ContactViewComponent} from "./contact-view/contact-view.component";
import { ContactViewUpdateComponent } from './contact-view-update/contact-view-update.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RoutingComponent } from './routing.component';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    LandingpageComponent,
    ContactViewComponent,
    ChatWindowComponent,
    ContactViewUpdateComponent,
    NotificationsComponent,
    RoutingComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(
          InMemoryDataService, {dataEncapsulation: false}
        )
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
