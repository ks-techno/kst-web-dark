import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showLoader: boolean = false;

  constructor(private router: Router) {
    console.log('loade:',this.showLoader)
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      }
      else if (event instanceof NavigationEnd) {
        this.showLoader = false;
      }
    });
  }
}
