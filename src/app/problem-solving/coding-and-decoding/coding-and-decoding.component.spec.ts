import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingAndDecodingComponent } from './coding-and-decoding.component';

describe('CodingAndDecodingComponent', () => {
  let component: CodingAndDecodingComponent;
  let fixture: ComponentFixture<CodingAndDecodingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingAndDecodingComponent]
    });
    fixture = TestBed.createComponent(CodingAndDecodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
