import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringAssessmentsComponent } from './hiring-assessments.component';

describe('HiringAssessmentsComponent', () => {
  let component: HiringAssessmentsComponent;
  let fixture: ComponentFixture<HiringAssessmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HiringAssessmentsComponent]
    });
    fixture = TestBed.createComponent(HiringAssessmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
