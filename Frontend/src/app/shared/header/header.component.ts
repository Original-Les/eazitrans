import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  url: string;
  hideElements: boolean = true;
  
  
  constructor() { }

  ngOnInit(): void {
  }

  showHide(): void {
    let hiddenElements = document.getElementById('hiddenElements');
    console.log(hiddenElements.style.display);
    hiddenElements.style.display = this.hideElements ? 'block' : 'none';
    this.hideElements = !this.hideElements;

  }

}
