import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshersRecruitmentComponent } from './freshers-recruitment.component';

describe('FreshersRecruitmentComponent', () => {
  let component: FreshersRecruitmentComponent;
  let fixture: ComponentFixture<FreshersRecruitmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreshersRecruitmentComponent]
    });
    fixture = TestBed.createComponent(FreshersRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
