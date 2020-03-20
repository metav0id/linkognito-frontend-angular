import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactViewComponent} from "./contact-view/contact-view.component";
import { ChatWindowComponent} from "./chat-window/chat-window.component";
import { ContactViewUpdateComponent} from "./contact-view-update/contact-view-update.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {LandingpageComponent} from "./landingpage/landingpage.component";


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
  { path: 'update/:id', component: ContactViewUpdateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
