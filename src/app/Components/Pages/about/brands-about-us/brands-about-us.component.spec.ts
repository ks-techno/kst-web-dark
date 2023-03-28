import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsAboutUsComponent } from './brands-about-us.component';

describe('BrandsAboutUsComponent', () => {
  let component: BrandsAboutUsComponent;
  let fixture: ComponentFixture<BrandsAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrandsAboutUsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandsAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
