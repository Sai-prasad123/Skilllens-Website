import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingSchoolComponent } from './finishing-school.component';

describe('FinishingSchoolComponent', () => {
  let component: FinishingSchoolComponent;
  let fixture: ComponentFixture<FinishingSchoolComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinishingSchoolComponent]
    });
    fixture = TestBed.createComponent(FinishingSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
