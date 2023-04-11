import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const header = document.querySelector('header');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const logo = document.getElementById('logo') as HTMLImageElement;

    if (scrollTop > 0) {
      header?.classList.add('header-solid');
      header?.classList.add('header-shrink');
      logo.src = '../../../../assets/Common/logo2.png';
    } else {
      header?.classList.remove('header-solid');
      header?.classList.remove('header-shrink');
      logo.src = '../../../../assets/Common/logo.png';
    }
  }
}