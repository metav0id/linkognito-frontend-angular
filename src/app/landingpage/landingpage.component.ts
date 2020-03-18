import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  private showContent = false;

  getShowContent(){
    return this.showContent;
  }

  toggleShowContent(){
    this.showContent = true;
  }
}
