import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailClientComponent } from './post-detail-client.component';

describe('PostDetailClientComponent', () => {
  let component: PostDetailClientComponent;
  let fixture: ComponentFixture<PostDetailClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
