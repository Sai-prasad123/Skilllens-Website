import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatiosProportionsVariationsComponent } from './ratios-proportions-variations.component';

describe('RatiosProportionsVariationsComponent', () => {
  let component: RatiosProportionsVariationsComponent;
  let fixture: ComponentFixture<RatiosProportionsVariationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatiosProportionsVariationsComponent]
    });
    fixture = TestBed.createComponent(RatiosProportionsVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
