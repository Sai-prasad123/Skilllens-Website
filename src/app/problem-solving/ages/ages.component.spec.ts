import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgesComponent } from './ages.component';

describe('AgesComponent', () => {
  let component: AgesComponent;
  let fixture: ComponentFixture<AgesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgesComponent]
    });
    fixture = TestBed.createComponent(AgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
