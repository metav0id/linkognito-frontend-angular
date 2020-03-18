import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GraduationProjectUserNg';

  private showContent = false;

  getShowContent(){
    return this.showContent;
  }
}
