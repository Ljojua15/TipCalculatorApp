import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeforeCalculationComponent } from './before-calculation.component';

describe('BeforeCalculationComponent', () => {
  let component: BeforeCalculationComponent;
  let fixture: ComponentFixture<BeforeCalculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeforeCalculationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeforeCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
