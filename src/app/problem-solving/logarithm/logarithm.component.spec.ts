import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogarithmComponent } from './logarithm.component';

describe('LogarithmComponent', () => {
  let component: LogarithmComponent;
  let fixture: ComponentFixture<LogarithmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogarithmComponent]
    });
    fixture = TestBed.createComponent(LogarithmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
