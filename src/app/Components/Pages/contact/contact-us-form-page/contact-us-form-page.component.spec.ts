import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsFormPageComponent } from './contact-us-form-page.component';

describe('ContactUsFormPageComponent', () => {
  let component: ContactUsFormPageComponent;
  let fixture: ComponentFixture<ContactUsFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactUsFormPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactUsFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
