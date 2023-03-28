import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageInfoComponent } from './about-page-info.component';

describe('AboutPageInfoComponent', () => {
  let component: AboutPageInfoComponent;
  let fixture: ComponentFixture<AboutPageInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPageInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPageInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
