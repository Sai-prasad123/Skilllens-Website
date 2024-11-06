import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSeriesComponent } from './number-series.component';

describe('NumberSeriesComponent', () => {
  let component: NumberSeriesComponent;
  let fixture: ComponentFixture<NumberSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberSeriesComponent]
    });
    fixture = TestBed.createComponent(NumberSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
