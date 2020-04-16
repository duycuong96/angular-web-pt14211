import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProductsHomeComponent } from './new-products-home.component';

describe('NewProductsHomeComponent', () => {
  let component: NewProductsHomeComponent;
  let fixture: ComponentFixture<NewProductsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProductsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProductsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
