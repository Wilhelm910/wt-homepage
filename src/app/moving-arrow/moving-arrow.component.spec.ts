import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovingArrowComponent } from './moving-arrow.component';

describe('MovingArrowComponent', () => {
  let component: MovingArrowComponent;
  let fixture: ComponentFixture<MovingArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovingArrowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovingArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
