import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestWayComponent } from './best-way.component';

describe('BestWayComponent', () => {
  let component: BestWayComponent;
  let fixture: ComponentFixture<BestWayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestWayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
