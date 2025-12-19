import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSixComponent } from './question-six.component';

describe('QuestionSixComponent', () => {
  let component: QuestionSixComponent;
  let fixture: ComponentFixture<QuestionSixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionSixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
