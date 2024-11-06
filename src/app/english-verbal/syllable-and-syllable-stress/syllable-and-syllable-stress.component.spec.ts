import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllableAndSyllableStressComponent } from './syllable-and-syllable-stress.component';

describe('SyllableAndSyllableStressComponent', () => {
  let component: SyllableAndSyllableStressComponent;
  let fixture: ComponentFixture<SyllableAndSyllableStressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SyllableAndSyllableStressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllableAndSyllableStressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
