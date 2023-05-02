import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingArrowToRightComponent } from './moving-arrow-to-right.component';

describe('MovingArrowToRightComponent', () => {
  let component: MovingArrowToRightComponent;
  let fixture: ComponentFixture<MovingArrowToRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingArrowToRightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingArrowToRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
