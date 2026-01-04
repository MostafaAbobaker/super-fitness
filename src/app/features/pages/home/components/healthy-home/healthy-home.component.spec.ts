import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyHomeComponent } from './healthy-home.component';

describe('HealthyHomeComponent', () => {
  let component: HealthyHomeComponent;
  let fixture: ComponentFixture<HealthyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthyHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
