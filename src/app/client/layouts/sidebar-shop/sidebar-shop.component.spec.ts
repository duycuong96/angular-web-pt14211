import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarShopComponent } from './sidebar-shop.component';

describe('SidebarShopComponent', () => {
  let component: SidebarShopComponent;
  let fixture: ComponentFixture<SidebarShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
