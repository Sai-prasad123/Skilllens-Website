import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewPresentationComponent } from './interview-presentation.component';

describe('InterviewPresentationComponent', () => {
  let component: InterviewPresentationComponent;
  let fixture: ComponentFixture<InterviewPresentationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewPresentationComponent]
    });
    fixture = TestBed.createComponent(InterviewPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
