import { Component, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-video-loader',
  templateUrl: './video-loader.component.html',
  styleUrls: ['./video-loader.component.css']
})
export class VideoLoaderComponent {
  @ViewChild('loaderVideo')
  loaderVideo!: ElementRef;
  isLoading: boolean = false;
  
  // startLoading() {
  //   this.isLoading = true;
  //   this.loaderVideo.nativeElement.play();
  // }
  
  // stopLoading() {
  //   this.isLoading = false;
  //   this.loaderVideo.nativeElement.pause();
  // }
 
}
