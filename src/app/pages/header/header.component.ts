import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public innerWidth: any;
  public menuOpen = false;
  // public mobile: 922;

  constructor() {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    // console.log($event);
    // console.log("scrolling");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById('logoHolder').style.padding = '1%';
      document.getElementById('logoHolder').style.width = '98%';
    } else {
      document.getElementById('logoHolder').style.padding = '5%';
      document.getElementById('logoHolder').style.width = '90%';
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('resize');

    this.innerWidth = window.innerWidth;
  }

  menuContainerNav() {
    if (this.innerWidth > 912) {
      return 'none';
    } else if (this.menuOpen) {
      return 'translateX(0%)';
    } else if (!this.menuOpen) {
      return 'translateX(-100%)';
    }
  }
}
