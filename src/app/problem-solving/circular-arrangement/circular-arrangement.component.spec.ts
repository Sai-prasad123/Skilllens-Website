import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularArrangementComponent } from './circular-arrangement.component';

describe('CircularArrangementComponent', () => {
  let component: CircularArrangementComponent;
  let fixture: ComponentFixture<CircularArrangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CircularArrangementComponent]
    });
    fixture = TestBed.createComponent(CircularArrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
