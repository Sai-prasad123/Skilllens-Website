import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleEquationsComponent } from './simple-equations.component';

describe('SimpleEquationsComponent', () => {
  let component: SimpleEquationsComponent;
  let fixture: ComponentFixture<SimpleEquationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleEquationsComponent]
    });
    fixture = TestBed.createComponent(SimpleEquationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
