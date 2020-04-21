import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCategoryManagerComponent } from './edit-category-manager.component';

describe('EditCategoryManagerComponent', () => {
  let component: EditCategoryManagerComponent;
  let fixture: ComponentFixture<EditCategoryManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCategoryManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCategoryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
