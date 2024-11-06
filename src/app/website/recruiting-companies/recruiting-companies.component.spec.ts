import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitingCompaniesComponent } from './recruiting-companies.component';

describe('RecruitingCompaniesComponent', () => {
  let component: RecruitingCompaniesComponent;
  let fixture: ComponentFixture<RecruitingCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecruitingCompaniesComponent]
    });
    fixture = TestBed.createComponent(RecruitingCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
