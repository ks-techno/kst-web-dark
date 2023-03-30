import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;
  @Input() heading!: string;
  @Input() subheading!: string;
  handleNavbarClick(){
    if ("about") {
      this.heading="About Us.";
      this.subheading=
        "Founded in 2021, KS-Technologies is a technology consulting company. We are dedicated to provide top-quality software solutions to our clients, and we take pride in delivering software that meets and exceeds their expectations."
      ;
    } else if ("services") {
      this.heading="Our Services";
      this.subheading="We offer a wide range of software services to our clients.";
    } else if ("portfolio") {
      this.heading="Portfolio";
      this.subheading="Check out some of our recent projects.";
    } else if ("contact") {
      this.heading="Contact Us";
      this.subheading="Get in touch with us to discuss your software needs.";
    }
  };
  
}
