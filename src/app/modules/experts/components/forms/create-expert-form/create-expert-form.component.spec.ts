import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExpertFormComponent } from './create-expert-form.component';

describe('CreateExpertFormComponent', () => {
  let component: CreateExpertFormComponent;
  let fixture: ComponentFixture<CreateExpertFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateExpertFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExpertFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
