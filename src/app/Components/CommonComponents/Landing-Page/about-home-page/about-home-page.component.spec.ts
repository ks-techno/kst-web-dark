import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHomePageComponent } from './about-home-page.component';

describe('AboutHomePageComponent', () => {
  let component: AboutHomePageComponent;
  let fixture: ComponentFixture<AboutHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
