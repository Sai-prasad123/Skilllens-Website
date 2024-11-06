import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsAndStreamComponent } from './boats-and-stream.component';

describe('BoatsAndStreamComponent', () => {
  let component: BoatsAndStreamComponent;
  let fixture: ComponentFixture<BoatsAndStreamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoatsAndStreamComponent]
    });
    fixture = TestBed.createComponent(BoatsAndStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
