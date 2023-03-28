import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageAboutUsComponent } from './landing-page-about-us.component';

describe('LandingPageAboutUsComponent', () => {
  let component: LandingPageAboutUsComponent;
  let fixture: ComponentFixture<LandingPageAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
