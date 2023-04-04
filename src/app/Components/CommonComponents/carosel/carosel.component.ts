import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-carosel',
  templateUrl: './carosel.component.html',
  styleUrls: ['./carosel.component.scss']
})
export class CaroselComponent {
  @ViewChild('sliderRef') sliderRef!: ElementRef;
  @ViewChild('s1') s1Ref!: ElementRef;
  @ViewChild('s2') s2Ref!: ElementRef;
  @ViewChild('s3') s3Ref!: ElementRef;
  @ViewChild('s4') s4Ref!: ElementRef;
  @ViewChild('s5') s5Ref!: ElementRef;

  ngAfterViewInit() {
    const slider = this.sliderRef.nativeElement;
    const radioButtons = [
      this.s1Ref.nativeElement,
      this.s2Ref.nativeElement,
      this.s3Ref.nativeElement,
      this.s4Ref.nativeElement,
      this.s5Ref.nativeElement
    ];
    
    let index = 0;
    
    setInterval(() => {
      radioButtons[index].checked = true;
      slider.style.transform = `translateX(-${index * 100}%)`;
      index = (index + 1) % radioButtons.length;
    }, 1000);
  }
  

  images = [
    "../../../../assets/Portfolio-images/caraouselImages/1.png",
    "../../../../assets/Portfolio-images/caraouselImages/2.png",
    "../../../../assets/Portfolio-images/caraouselImages/3.png",
    "../../../../assets/Portfolio-images/caraouselImages/5.png",
    "../../../../assets/Portfolio-images/caraouselImages/4.png"
  ];
}
