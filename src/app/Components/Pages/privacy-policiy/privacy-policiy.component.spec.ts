import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPoliciyComponent } from './privacy-policiy.component';

describe('PrivacyPoliciyComponent', () => {
  let component: PrivacyPoliciyComponent;
  let fixture: ComponentFixture<PrivacyPoliciyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPoliciyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivacyPoliciyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
