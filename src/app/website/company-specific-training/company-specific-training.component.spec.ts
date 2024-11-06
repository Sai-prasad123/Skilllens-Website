import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanySpecificTrainingComponent } from './company-specific-training.component';

describe('CompanySpecificTrainingComponent', () => {
  let component: CompanySpecificTrainingComponent;
  let fixture: ComponentFixture<CompanySpecificTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanySpecificTrainingComponent]
    });
    fixture = TestBed.createComponent(CompanySpecificTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
