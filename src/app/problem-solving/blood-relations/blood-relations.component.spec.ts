import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodRelationsComponent } from './blood-relations.component';

describe('BloodRelationsComponent', () => {
  let component: BloodRelationsComponent;
  let fixture: ComponentFixture<BloodRelationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodRelationsComponent]
    });
    fixture = TestBed.createComponent(BloodRelationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
