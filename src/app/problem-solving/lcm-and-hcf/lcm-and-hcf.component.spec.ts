import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LcmAndHcfComponent } from './lcm-and-hcf.component';

describe('LcmAndHcfComponent', () => {
  let component: LcmAndHcfComponent;
  let fixture: ComponentFixture<LcmAndHcfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LcmAndHcfComponent]
    });
    fixture = TestBed.createComponent(LcmAndHcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
