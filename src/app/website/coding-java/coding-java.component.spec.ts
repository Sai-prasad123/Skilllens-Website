import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingJavaComponent } from './coding-java.component';

describe('CodingJavaComponent', () => {
  let component: CodingJavaComponent;
  let fixture: ComponentFixture<CodingJavaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodingJavaComponent]
    });
    fixture = TestBed.createComponent(CodingJavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
