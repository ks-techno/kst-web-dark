import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsEmailComponent } from './news-email.component';

describe('NewsEmailComponent', () => {
  let component: NewsEmailComponent;
  let fixture: ComponentFixture<NewsEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
