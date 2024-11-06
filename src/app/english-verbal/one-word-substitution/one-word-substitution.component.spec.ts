import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWordSubstitutionComponent } from './one-word-substitution.component';

describe('OneWordSubstitutionComponent', () => {
  let component: OneWordSubstitutionComponent;
  let fixture: ComponentFixture<OneWordSubstitutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneWordSubstitutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWordSubstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
