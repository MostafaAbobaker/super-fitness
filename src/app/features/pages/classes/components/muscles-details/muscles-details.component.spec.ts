import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusclesDetailsComponent } from './muscles-details.component';

describe('MusclesDetailsComponent', () => {
  let component: MusclesDetailsComponent;
  let fixture: ComponentFixture<MusclesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusclesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusclesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
