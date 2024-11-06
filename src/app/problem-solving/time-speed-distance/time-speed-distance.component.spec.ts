import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpeedDistanceComponent } from './time-speed-distance.component';

describe('TimeSpeedDistanceComponent', () => {
  let component: TimeSpeedDistanceComponent;
  let fixture: ComponentFixture<TimeSpeedDistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeSpeedDistanceComponent]
    });
    fixture = TestBed.createComponent(TimeSpeedDistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
