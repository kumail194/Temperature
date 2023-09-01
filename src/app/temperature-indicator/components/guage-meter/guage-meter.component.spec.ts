import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuageMeterComponent } from './guage-meter.component';

describe('GuageMeterComponent', () => {
  let component: GuageMeterComponent;
  let fixture: ComponentFixture<GuageMeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuageMeterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuageMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
