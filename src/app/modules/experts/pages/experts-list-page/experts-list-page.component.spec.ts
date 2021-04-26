import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertsListPageComponent } from './experts-list-page.component';

describe('ExpertsListComponent', () => {
  let component: ExpertsListPageComponent;
  let fixture: ComponentFixture<ExpertsListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertsListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
