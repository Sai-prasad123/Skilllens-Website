import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentenceCorrectionComponent } from './sentence-correction.component';

describe('SentenceCorrectionComponent', () => {
  let component: SentenceCorrectionComponent;
  let fixture: ComponentFixture<SentenceCorrectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SentenceCorrectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SentenceCorrectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
