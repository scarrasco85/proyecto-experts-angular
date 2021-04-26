import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginSelectorComponent } from './origin-selector.component';

describe('OriginSelectorComponent', () => {
  let component: OriginSelectorComponent;
  let fixture: ComponentFixture<OriginSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OriginSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OriginSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
