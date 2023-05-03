import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingArrow2Component } from './moving-arrow2.component';

describe('MovingArrow2Component', () => {
  let component: MovingArrow2Component;
  let fixture: ComponentFixture<MovingArrow2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingArrow2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingArrow2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
