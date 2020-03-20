import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ContactViewComponent } from "./contact-view/contact-view.component";
import { ContactViewUpdateComponent } from './contact-view-update/contact-view-update.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { RoutingComponent } from './routing.component';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LandingpageComponent } from './landingpage/landingpage.component';
<<<<<<< HEAD
import { QrGenerateComponent } from './qr-generate/qr-generate.component';
import {QRCodeModule} from 'angularx-qrcode';
=======
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

>>>>>>> 9196f525d823bdb7efccb610c889fc815f7bea93

@NgModule({
  declarations: [
    AppComponent,
    ChatWindowComponent,
    LandingpageComponent,
    LoginComponent,
    ContactViewComponent,
    ChatWindowComponent,
    ContactViewUpdateComponent,
    NotificationsComponent,
    RoutingComponent,
<<<<<<< HEAD
    QrGenerateComponent,
=======
    RegisterComponent,
>>>>>>> 9196f525d823bdb7efccb610c889fc815f7bea93

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
