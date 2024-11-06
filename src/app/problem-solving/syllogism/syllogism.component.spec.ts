import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SyllogismComponent } from './syllogism.component';

describe('SyllogismComponent', () => {
  let component: SyllogismComponent;
  let fixture: ComponentFixture<SyllogismComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SyllogismComponent]
    });
    fixture = TestBed.createComponent(SyllogismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
