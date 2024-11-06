import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartsOfSpeechComponent } from './parts-of-speech.component';

describe('PartsOfSpeechComponent', () => {
  let component: PartsOfSpeechComponent;
  let fixture: ComponentFixture<PartsOfSpeechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartsOfSpeechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartsOfSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
