import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductManagerComponent } from './add-product-manager.component';

describe('AddProductManagerComponent', () => {
  let component: AddProductManagerComponent;
  let fixture: ComponentFixture<AddProductManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
