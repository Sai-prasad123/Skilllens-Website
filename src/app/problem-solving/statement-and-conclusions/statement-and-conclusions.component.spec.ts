import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementAndConclusionsComponent } from './statement-and-conclusions.component';

describe('StatementAndConclusionsComponent', () => {
  let component: StatementAndConclusionsComponent;
  let fixture: ComponentFixture<StatementAndConclusionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StatementAndConclusionsComponent]
    });
    fixture = TestBed.createComponent(StatementAndConclusionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
