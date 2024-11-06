import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurdsAndIndicesComponent } from './surds-and-indices.component';

describe('SurdsAndIndicesComponent', () => {
  let component: SurdsAndIndicesComponent;
  let fixture: ComponentFixture<SurdsAndIndicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurdsAndIndicesComponent]
    });
    fixture = TestBed.createComponent(SurdsAndIndicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
