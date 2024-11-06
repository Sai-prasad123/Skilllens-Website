import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearArrangmentComponent } from './linear-arrangment.component';

describe('LinearArrangmentComponent', () => {
  let component: LinearArrangmentComponent;
  let fixture: ComponentFixture<LinearArrangmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinearArrangmentComponent]
    });
    fixture = TestBed.createComponent(LinearArrangmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
