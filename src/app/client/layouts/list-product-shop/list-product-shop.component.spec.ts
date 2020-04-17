import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductShopComponent } from './list-product-shop.component';

describe('ListProductShopComponent', () => {
  let component: ListProductShopComponent;
  let fixture: ComponentFixture<ListProductShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
