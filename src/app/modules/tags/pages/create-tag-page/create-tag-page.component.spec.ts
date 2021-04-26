import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTagPageComponent } from './create-tag-page.component';

describe('CreateTagPageComponent', () => {
  let component: CreateTagPageComponent;
  let fixture: ComponentFixture<CreateTagPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTagPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTagPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
