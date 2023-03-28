import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsBrandsComponent } from './about-us-brands.component';

describe('AboutUsBrandsComponent', () => {
  let component: AboutUsBrandsComponent;
  let fixture: ComponentFixture<AboutUsBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutUsBrandsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutUsBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
