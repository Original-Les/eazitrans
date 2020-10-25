import { Component, OnInit,  HostListener} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  screenWidth: number;
  url: string;  
  hideElements: boolean = true;
  
  constructor() {
    this.screenWidth = (window.screen.height);

   }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.screenWidth = window.innerWidth;
        let hide = document.getElementById('hiddenElements');
        if (this.screenWidth > 550) {
        hide.style.display = 'block';
        }
        else {
          hide.style.display = 'none';
        }
    }

  showHide(): void {
    let hiddenElements = document.getElementById('hiddenElements');
    console.log(hiddenElements.style.display);
    hiddenElements.style.display = this.hideElements ? 'block' : 'none';
    this.hideElements = !this.hideElements;
  }



  showHideScreen(): void {

  }

}
