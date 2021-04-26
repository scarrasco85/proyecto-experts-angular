import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotiveSelectComponent } from './motive-select.component';

describe('MotiveSelectComponent', () => {
  let component: MotiveSelectComponent;
  let fixture: ComponentFixture<MotiveSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotiveSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotiveSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
