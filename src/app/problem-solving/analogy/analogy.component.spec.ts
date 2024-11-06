import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalogyComponent } from './analogy.component';

describe('AnalogyComponent', () => {
  let component: AnalogyComponent;
  let fixture: ComponentFixture<AnalogyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnalogyComponent]
    });
    fixture = TestBed.createComponent(AnalogyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
