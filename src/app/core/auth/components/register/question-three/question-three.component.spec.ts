import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionThreeComponent } from './question-three.component';

describe('QuestionThreeComponent', () => {
  let component: QuestionThreeComponent;
  let fixture: ComponentFixture<QuestionThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionThreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
