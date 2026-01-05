import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyHeaderComponent } from './healthy-header.component';

describe('HealthyHeaderComponent', () => {
  let component: HealthyHeaderComponent;
  let fixture: ComponentFixture<HealthyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthyHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
