import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsscriptionPolicyComponent } from './subsscription-policy.component';

describe('SubsscriptionPolicyComponent', () => {
  let component: SubsscriptionPolicyComponent;
  let fixture: ComponentFixture<SubsscriptionPolicyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubsscriptionPolicyComponent]
    });
    fixture = TestBed.createComponent(SubsscriptionPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
