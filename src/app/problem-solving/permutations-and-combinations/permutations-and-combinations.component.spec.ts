import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermutationsAndCombinationsComponent } from './permutations-and-combinations.component';

describe('PermutationsAndCombinationsComponent', () => {
  let component: PermutationsAndCombinationsComponent;
  let fixture: ComponentFixture<PermutationsAndCombinationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PermutationsAndCombinationsComponent]
    });
    fixture = TestBed.createComponent(PermutationsAndCombinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
