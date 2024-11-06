import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusRecruitmentTrainingComponent } from './campus-recruitment-training.component';

describe('CampusRecruitmentTrainingComponent', () => {
  let component: CampusRecruitmentTrainingComponent;
  let fixture: ComponentFixture<CampusRecruitmentTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampusRecruitmentTrainingComponent]
    });
    fixture = TestBed.createComponent(CampusRecruitmentTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
