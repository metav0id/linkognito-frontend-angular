import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactViewComponent} from "./contact-view/contact-view.component";
import { ChatWindowComponent} from "./chat-window/chat-window.component";
import { LandingpageComponent} from "./landingpage/landingpage.component";
import { ContactViewUpdateComponent} from "./contact-view-update/contact-view-update.component";
import {LoginComponent} from "./login/login.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent},
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
