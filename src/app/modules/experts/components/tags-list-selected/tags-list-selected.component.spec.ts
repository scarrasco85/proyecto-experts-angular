import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsListSelectedComponent } from './tags-list-selected.component';

describe('TagsListSelectedComponent', () => {
  let component: TagsListSelectedComponent;
  let fixture: ComponentFixture<TagsListSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TagsListSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsListSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
