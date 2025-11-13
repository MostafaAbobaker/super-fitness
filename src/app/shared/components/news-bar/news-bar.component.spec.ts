import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBarComponent } from './news-bar.component';

describe('NewsBarComponent', () => {
  let component: NewsBarComponent;
  let fixture: ComponentFixture<NewsBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
