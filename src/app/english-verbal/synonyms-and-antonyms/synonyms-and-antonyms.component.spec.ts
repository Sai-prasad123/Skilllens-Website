import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynonymsAndAntonymsComponent } from './synonyms-and-antonyms.component';

describe('SynonymsAndAntonymsComponent', () => {
  let component: SynonymsAndAntonymsComponent;
  let fixture: ComponentFixture<SynonymsAndAntonymsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynonymsAndAntonymsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynonymsAndAntonymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
