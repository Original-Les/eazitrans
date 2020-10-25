import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  screenWidth: number;

  constructor() { 
    this.getScreenSize();
  }

  ngOnInit(): void {
    this.hide();
  }

  @HostListener('window:resize', ['$event'])
    getScreenSize(event?) {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth < 550) {
        this.hide();
      }
      else {
        this.show();
    }
    }
    
    hide (): void {
    let initiative = document.getElementsByTagName("span");
    // console.log(initiative);
    if (this.screenWidth < 551) {
      for (let i = 0; i < initiative.length; i++) {
        initiative[i].innerHTML = "";
      }
    }
    }

    show (): void {
      let initiative = document.getElementsByTagName("span");
      for (let i = 0; i < initiative.length; i++) {
        if (i === 0) {
        initiative[i].innerHTML = "A";
        }
        else if (i === 1) {
            initiative[i].innerHTML = "initiative";
        }
        else {
          initiative[i].innerHTML = "Contact us:"
        }
      }
    }

}
