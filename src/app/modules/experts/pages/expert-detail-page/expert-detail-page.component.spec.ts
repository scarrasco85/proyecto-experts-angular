import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertDetailPageComponent } from './expert-detail-page.component';

describe('ExpertDetailPageComponent', () => {
  let component: ExpertDetailPageComponent;
  let fixture: ComponentFixture<ExpertDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
