import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSufficiencyComponent } from './data-sufficiency.component';

describe('DataSufficiencyComponent', () => {
  let component: DataSufficiencyComponent;
  let fixture: ComponentFixture<DataSufficiencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataSufficiencyComponent]
    });
    fixture = TestBed.createComponent(DataSufficiencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
