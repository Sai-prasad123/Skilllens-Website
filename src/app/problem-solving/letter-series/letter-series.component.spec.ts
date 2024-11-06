import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterSeriesComponent } from './letter-series.component';

describe('LetterSeriesComponent', () => {
  let component: LetterSeriesComponent;
  let fixture: ComponentFixture<LetterSeriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LetterSeriesComponent]
    });
    fixture = TestBed.createComponent(LetterSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
