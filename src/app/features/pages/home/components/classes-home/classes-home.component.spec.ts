import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesHomeComponent } from './classes-home.component';

describe('ClassesHomeComponent', () => {
  let component: ClassesHomeComponent;
  let fixture: ComponentFixture<ClassesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
