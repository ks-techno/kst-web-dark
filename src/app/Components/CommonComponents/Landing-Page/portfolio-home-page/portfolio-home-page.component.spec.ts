import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHomePageComponent } from './portfolio-home-page.component';

describe('PortfolioHomePageComponent', () => {
  let component: PortfolioHomePageComponent;
  let fixture: ComponentFixture<PortfolioHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
