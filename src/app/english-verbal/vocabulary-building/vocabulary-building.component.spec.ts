import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabularyBuildingComponent } from './vocabulary-building.component';

describe('VocabularyBuildingComponent', () => {
  let component: VocabularyBuildingComponent;
  let fixture: ComponentFixture<VocabularyBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VocabularyBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabularyBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
