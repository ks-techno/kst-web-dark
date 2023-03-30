import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public isCollapsed = true;
  heading!: string;
  subheading!: string;
  constructor() {
    this.heading = localStorage.getItem('heading') || 'KS-Technologies';
    this.subheading = localStorage.getItem('subheading') || "A Software development company devoted to your project's success which accelerate your digital growth with our solutions.";
  }
  setActiveLink(link: string) {
    switch (link) {
      case 'home':
        this.heading = 'KS-Technologies';
        this.subheading = "A Software development company devoted to your project's success which accelerate your digital growth with our solutions.";
        break;
      case 'about':
        this.heading = 'About Us';
        this.subheading = "KS-Technologies is a software development company. Our team of expert developers are skilled in React JS, AWS, Angular, WordPress, Shopify, Block chain, Machine Learning, PMO Department, Python with AI, Web3 Solidity and ROR, allowing us to develop software for a variety of platforms and industries. We are dedicated to provide top-quality software solutions to our clients, and we take pride in delivering software that meets and exceeds their expectations.";
        break;
      case 'our-service':
        this.heading = 'Our Services';
        this.subheading = "We are dedicated to provide top-quality software solutions to our clients, and we take pride in delivering software that meets and exceeds their expectations."
        "We strive to stay on top of the latest trends and technologies to provide our clients with cutting-edge software solutions.";
        break;
      case 'portfolio':
        this.heading = 'Portfolio';
        this.subheading = 'We are a team of expert developers, designers, and project managers who are'
        'passionate about delivering high-quality software solutions to our clients.';
        break;
      case 'contact':
        this.heading = 'Contact Us';
        this.subheading = 'Get in touch with our team';
        break;
      default:
        break;
    }
    localStorage.setItem('heading', this.heading);
    localStorage.setItem('subheading', this.subheading);
  }
}
