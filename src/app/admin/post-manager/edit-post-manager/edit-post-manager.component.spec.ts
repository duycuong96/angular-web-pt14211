import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPostManagerComponent } from './edit-post-manager.component';

describe('EditPostManagerComponent', () => {
  let component: EditPostManagerComponent;
  let fixture: ComponentFixture<EditPostManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPostManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPostManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
