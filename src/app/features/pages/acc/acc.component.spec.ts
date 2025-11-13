import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACCComponent } from './acc.component';

describe('ACCComponent', () => {
  let component: ACCComponent;
  let fixture: ComponentFixture<ACCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ACCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
