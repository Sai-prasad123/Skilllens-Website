import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasAndVolumesComponent } from './areas-and-volumes.component';

describe('AreasAndVolumesComponent', () => {
  let component: AreasAndVolumesComponent;
  let fixture: ComponentFixture<AreasAndVolumesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreasAndVolumesComponent]
    });
    fixture = TestBed.createComponent(AreasAndVolumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
