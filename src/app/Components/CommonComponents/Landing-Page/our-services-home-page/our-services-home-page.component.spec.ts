import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesHomePageComponent } from './our-services-home-page.component';

describe('OurServicesHomePageComponent', () => {
  let component: OurServicesHomePageComponent;
  let fixture: ComponentFixture<OurServicesHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurServicesHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurServicesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
