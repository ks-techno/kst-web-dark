import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { VideoLoaderService } from './video-loader.service';

@Directive({
  selector: 'video[videoPreload]'
})
export class VideoPreloadDirective implements OnInit {

  @Input()
  videoPreload!: string;

  constructor(
    private elementRef: ElementRef,
    private videoLoader: VideoLoaderService
  ) {}

  ngOnInit() {
    const videoElement = this.elementRef.nativeElement;
    const videoUrl = this.videoPreload;

    this.videoLoader.loadVideo(videoUrl)
      .subscribe(blob => {
        const objectUrl = URL.createObjectURL(blob);
        videoElement.src = objectUrl;
      });
  }

}
