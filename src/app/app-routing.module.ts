import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactViewComponent} from "./contact-view/contact-view.component";
import { ChatWindowComponent} from "./chat-window/chat-window.component";
import { LandingpageComponent} from "./landingpage/landingpage.component";
import { ContactViewUpdateComponent} from "./contact-view-update/contact-view-update.component";
import {QrGenerateComponent} from './qr-generate/qr-generate.component';


/**
 * Routes-file contains all subpages of user-module.
 * First entry (redirectTo) specifies starting-page
 */

const routes: Routes = [
  { path: '', redirectTo: '/landingpage', pathMatch: 'full'},
  { path: 'landingpage', component: LandingpageComponent},
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
