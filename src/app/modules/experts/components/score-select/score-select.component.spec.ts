import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreSelectComponent } from './score-select.component';

describe('ScoreSelectComponent', () => {
  let component: ScoreSelectComponent;
  let fixture: ComponentFixture<ScoreSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoreSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
