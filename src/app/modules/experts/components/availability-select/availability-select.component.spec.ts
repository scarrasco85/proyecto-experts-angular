import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailabilitySelectComponent } from './availability-select.component';

describe('AvailabilitySelectComponent', () => {
  let component: AvailabilitySelectComponent;
  let fixture: ComponentFixture<AvailabilitySelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailabilitySelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailabilitySelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
