import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceForClientsComponent } from './service-for-clients.component';

describe('ServiceForClientsComponent', () => {
  let component: ServiceForClientsComponent;
  let fixture: ComponentFixture<ServiceForClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceForClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceForClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
