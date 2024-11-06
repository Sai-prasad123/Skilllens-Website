import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceOfIndustryComponent } from './voice-of-industry.component';

describe('VoiceOfIndustryComponent', () => {
  let component: VoiceOfIndustryComponent;
  let fixture: ComponentFixture<VoiceOfIndustryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VoiceOfIndustryComponent]
    });
    fixture = TestBed.createComponent(VoiceOfIndustryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
