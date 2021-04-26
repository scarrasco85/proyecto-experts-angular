import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertDetailFormComponent } from './expert-detail-form.component';

describe('ExpertDetailFormComponent', () => {
  let component: ExpertDetailFormComponent;
  let fixture: ComponentFixture<ExpertDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertDetailFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
