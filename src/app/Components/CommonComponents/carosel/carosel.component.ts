import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.scss']
})
export class CaroselComponent {
 
  images = [
    "../../../../assets/Portfolio-images/caraouselImages/1.png",
    "../../../../assets/Portfolio-images/caraouselImages/2.png",
    "../../../../assets/Portfolio-images/caraouselImages/3.png",
    "../../../../assets/Portfolio-images/caraouselImages/5.png",
    "../../../../assets/Portfolio-images/caraouselImages/4.png"
  ];
}
