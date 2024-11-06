import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionSenseComponent } from './direction-sense.component';

describe('DirectionSenseComponent', () => {
  let component: DirectionSenseComponent;
  let fixture: ComponentFixture<DirectionSenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirectionSenseComponent]
    });
    fixture = TestBed.createComponent(DirectionSenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
