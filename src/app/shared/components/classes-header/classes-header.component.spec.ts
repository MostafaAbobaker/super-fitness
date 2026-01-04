import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesHeaderComponent } from './classes-header.component';

describe('ClassesHeaderComponent', () => {
  let component: ClassesHeaderComponent;
  let fixture: ComponentFixture<ClassesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
