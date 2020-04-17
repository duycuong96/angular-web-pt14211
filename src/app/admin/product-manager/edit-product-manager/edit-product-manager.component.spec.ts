import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductManagerComponent } from './edit-product-manager.component';

describe('EditProductManagerComponent', () => {
  let component: EditProductManagerComponent;
  let fixture: ComponentFixture<EditProductManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
