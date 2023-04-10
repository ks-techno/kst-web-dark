import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { VideoLoaderService } from '../../../video-loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;
  heading!: string;
  subheading!: string;
  
  constructor(private router: Router, private videoLoader: VideoLoaderService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.videoLoader.loadVideo('../../../../assets/Common/loader.mp4').subscribe();
    });
  }

}