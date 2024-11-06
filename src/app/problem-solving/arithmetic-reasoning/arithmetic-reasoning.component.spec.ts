import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticReasoningComponent } from './arithmetic-reasoning.component';

describe('ArithmeticReasoningComponent', () => {
  let component: ArithmeticReasoningComponent;
  let fixture: ComponentFixture<ArithmeticReasoningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArithmeticReasoningComponent]
    });
    fixture = TestBed.createComponent(ArithmeticReasoningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
