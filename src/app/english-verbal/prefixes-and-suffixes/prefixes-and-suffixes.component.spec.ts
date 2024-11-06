import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrefixesAndSuffixesComponent } from './prefixes-and-suffixes.component';

describe('PrefixesAndSuffixesComponent', () => {
  let component: PrefixesAndSuffixesComponent;
  let fixture: ComponentFixture<PrefixesAndSuffixesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrefixesAndSuffixesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrefixesAndSuffixesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
