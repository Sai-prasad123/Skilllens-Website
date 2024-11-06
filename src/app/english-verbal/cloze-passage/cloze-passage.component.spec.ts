import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClozePassageComponent } from './cloze-passage.component';

describe('ClozePassageComponent', () => {
  let component: ClozePassageComponent;
  let fixture: ComponentFixture<ClozePassageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClozePassageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClozePassageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
