import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryManagerComponent } from './add-category-manager.component';

describe('AddCategoryManagerComponent', () => {
  let component: AddCategoryManagerComponent;
  let fixture: ComponentFixture<AddCategoryManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCategoryManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategoryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
