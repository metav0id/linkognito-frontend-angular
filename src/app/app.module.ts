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
import { LandingpageComponent } from './landingpage/landingpage.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import {QrGenerateComponent} from './qr-generate/qr-generate.component';
import {QRCodeModule} from 'angularx-qrcode';
import { ScannerComponent } from './scanner/scanner.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { ZXingScannerModule } from "@zxing/ngx-scanner";



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
    QrGenerateComponent,
    RegisterComponent,
    ScannerComponent,
    LoginSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    QRCodeModule,
    ZXingScannerModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
