import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  @Input() heading!: string;
  @Input() subheading!: string;
  setActiveLink() {
    this.heading = 'Contact Us';
        this.subheading = 'We appreciate your interest and would love to hear from you. If you have any questions, comments, or feedback, please do not hesitate to reach out to us using the form below. We will get back to you as soon as possible.';
  }
}
