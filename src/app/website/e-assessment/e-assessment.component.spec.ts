import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EAssessmentComponent } from './e-assessment.component';

describe('EAssessmentComponent', () => {
  let component: EAssessmentComponent;
  let fixture: ComponentFixture<EAssessmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EAssessmentComponent]
    });
    fixture = TestBed.createComponent(EAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
