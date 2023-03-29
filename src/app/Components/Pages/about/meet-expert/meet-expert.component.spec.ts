import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetExpertComponent } from './meet-expert.component';

describe('MeetExpertComponent', () => {
  let component: MeetExpertComponent;
  let fixture: ComponentFixture<MeetExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetExpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
