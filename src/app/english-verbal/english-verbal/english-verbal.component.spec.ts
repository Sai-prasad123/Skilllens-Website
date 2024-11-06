import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishVerbalComponent } from './english-verbal.component';

describe('EnglishVerbalComponent', () => {
  let component: EnglishVerbalComponent;
  let fixture: ComponentFixture<EnglishVerbalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnglishVerbalComponent]
    });
    fixture = TestBed.createComponent(EnglishVerbalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
