import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterjectionsComponent } from './interjections.component';

describe('InterjectionsComponent', () => {
  let component: InterjectionsComponent;
  let fixture: ComponentFixture<InterjectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterjectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterjectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
