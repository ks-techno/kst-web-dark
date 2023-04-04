import { Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.components.scss']
})
export class BrandsComponent {

  images = [
    '../../../../../assets/clientLogo/1.png',
    '../../../../../assets/clientLogo/2.png',
    '../../../../../assets/clientLogo/3.png',
    '../../../../../assets/clientLogo/4.png',
    '../../../../../assets/clientLogo/5.png',
    '../../../../../assets/clientLogo/6.png',
  ];
}
