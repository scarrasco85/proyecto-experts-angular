import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsListComponent } from './experts-list.component';

describe('ExpertsListComponent', () => {
  let component: ExpertsListComponent;
  let fixture: ComponentFixture<ExpertsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
