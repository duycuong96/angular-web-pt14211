import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostManagerComponent } from './add-post-manager.component';

describe('AddPostManagerComponent', () => {
  let component: AddPostManagerComponent;
  let fixture: ComponentFixture<AddPostManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
