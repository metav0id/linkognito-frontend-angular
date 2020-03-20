import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactViewComponent} from "./contact-view/contact-view.component";
import { ChatWindowComponent} from "./chat-window/chat-window.component";
import { ContactViewUpdateComponent} from "./contact-view-update/contact-view-update.component";

import {QrGenerateComponent} from './qr-generate/qr-generate.component';
import {LandingpageComponent} from './landingpage/landingpage.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

/**
 * Routes-file contains all subpages of user-module.
 * First entry (redirectTo) specifies starting-page
 */

const routes: Routes = [
  { path: '', component: LandingpageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contacts', component: ContactViewComponent},
  { path: 'chat/:id', component: ChatWindowComponent},
  { path: 'createQRCode', component: QrGenerateComponent},
  { path: 'update/:id', component: ContactViewUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
