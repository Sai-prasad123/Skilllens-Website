import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingCsharpComponent } from './coding-csharp.component';

describe('CodingCsharpComponent', () => {
  let component: CodingCsharpComponent;
  let fixture: ComponentFixture<CodingCsharpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingCsharpComponent]
    });
    fixture = TestBed.createComponent(CodingCsharpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
