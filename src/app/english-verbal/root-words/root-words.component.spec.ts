import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootWordsComponent } from './root-words.component';

describe('RootWordsComponent', () => {
  let component: RootWordsComponent;
  let fixture: ComponentFixture<RootWordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootWordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootWordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
