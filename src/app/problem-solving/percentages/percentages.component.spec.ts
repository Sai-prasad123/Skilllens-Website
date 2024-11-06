import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentagesComponent } from './percentages.component';

describe('PercentagesComponent', () => {
  let component: PercentagesComponent;
  let fixture: ComponentFixture<PercentagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PercentagesComponent]
    });
    fixture = TestBed.createComponent(PercentagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
