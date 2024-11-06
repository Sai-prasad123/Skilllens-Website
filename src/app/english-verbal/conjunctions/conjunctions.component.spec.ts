import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConjunctionsComponent } from './conjunctions.component';

describe('ConjunctionsComponent', () => {
  let component: ConjunctionsComponent;
  let fixture: ComponentFixture<ConjunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConjunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConjunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
