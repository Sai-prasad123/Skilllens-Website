import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingPythonComponent } from './coding-python.component';

describe('CodingPythonComponent', () => {
  let component: CodingPythonComponent;
  let fixture: ComponentFixture<CodingPythonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingPythonComponent]
    });
    fixture = TestBed.createComponent(CodingPythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
