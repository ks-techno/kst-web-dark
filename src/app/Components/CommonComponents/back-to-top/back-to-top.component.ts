import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.css']
})
export class BackToTopComponent {
  constructor() { }
  ngOnInit(): void {
  }
  // Show or hide the button based on the user's scroll position
  @HostListener('window:scroll', [])
  onWindowScroll() {
    var btn = document.getElementById("back-to-top-btn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn!.style.display = "block";
    } else {
      btn!.style.display = "none";
    }
  }

  // Scroll back to the top when the button is clicked
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
