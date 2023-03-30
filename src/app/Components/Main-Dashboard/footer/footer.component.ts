import { Component } from '@angular/core';
import { faHouse,faInfoCircle,faBriefcase,faNewspaper,faPenRuler,faPhone,faMagnifyingGlass,faPhoneVolume,faEnvelope,faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
  home = faHouse;
  aboutus = faInfoCircle;
  services = faBriefcase
  portfolio = faPenRuler;
  contactus = faPhone;
}
