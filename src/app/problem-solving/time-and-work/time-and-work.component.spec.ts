import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAndWorkComponent } from './time-and-work.component';

describe('TimeAndWorkComponent', () => {
  let component: TimeAndWorkComponent;
  let fixture: ComponentFixture<TimeAndWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeAndWorkComponent]
    });
    fixture = TestBed.createComponent(TimeAndWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
