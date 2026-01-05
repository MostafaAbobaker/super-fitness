import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBodyBtnComponent } from './full-body-btn.component';

describe('FullBodyBtnComponent', () => {
  let component: FullBodyBtnComponent;
  let fixture: ComponentFixture<FullBodyBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullBodyBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullBodyBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
