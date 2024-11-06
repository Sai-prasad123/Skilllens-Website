import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetTheoryComponent } from './set-theory.component';

describe('SetTheoryComponent', () => {
  let component: SetTheoryComponent;
  let fixture: ComponentFixture<SetTheoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SetTheoryComponent]
    });
    fixture = TestBed.createComponent(SetTheoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
