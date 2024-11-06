import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopsSeminarsComponent } from './workshops-seminars.component';

describe('WorkshopsSeminarsComponent', () => {
  let component: WorkshopsSeminarsComponent;
  let fixture: ComponentFixture<WorkshopsSeminarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopsSeminarsComponent]
    });
    fixture = TestBed.createComponent(WorkshopsSeminarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
