import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsHomePageComponent } from './contact-us-home-page.component';

describe('ContactUsHomePageComponent', () => {
  let component: ContactUsHomePageComponent;
  let fixture: ComponentFixture<ContactUsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
