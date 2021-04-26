import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpertPageComponent } from './create-expert-page.component';

describe('CreateExpertPageComponent', () => {
  let component: CreateExpertPageComponent;
  let fixture: ComponentFixture<CreateExpertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExpertPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExpertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
