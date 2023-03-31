import { Component, ViewChild  } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;
  images = [
    { src: 'image1.jpg', alt: 'Image 1' },
    { src: 'image2.jpg', alt: 'Image 2' },
    { src: 'image3.jpg', alt: 'Image 3' },
    { src: 'image4.jpg', alt: 'Image 4' },
    { src: 'image5.jpg', alt: 'Image 5' },
    { src: 'image6.jpg', alt: 'Image 6' },
    { src: 'image7.jpg', alt: 'Image 7' },
    { src: 'image8.jpg', alt: 'Image 8' },
    { src: 'image9.jpg', alt: 'Image 9' },
    { src: 'image10.jpg', alt: 'Image 10' }
  ];
}
