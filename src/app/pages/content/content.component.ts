import { Component, OnInit, HostListener } from '@angular/core';
import { HeaderNavigationService } from 'src/app/core/services/header-navigation.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  public innerWidth: any;

  constructor( private headerNavigationService: HeaderNavigationService) { }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
    this.headerNavigationService.tabObs.subscribe((i) => {
      console.log(i);
      if (i[0]) {
      document.getElementById(i[0]).scrollIntoView();
      window.scrollBy(0, document.getElementById('logoHolder').clientHeight * -1)
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log('resize');

    this.innerWidth = window.innerWidth;
  }

}
