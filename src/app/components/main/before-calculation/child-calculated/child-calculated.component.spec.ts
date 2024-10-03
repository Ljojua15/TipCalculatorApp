import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCalculatedComponent } from './child-calculated.component';

describe('ChildCalculatedComponent', () => {
  let component: ChildCalculatedComponent;
  let fixture: ComponentFixture<ChildCalculatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCalculatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildCalculatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
