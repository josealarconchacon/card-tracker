import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanComponentsComponent } from './loan-components.component';

describe('LoanComponentsComponent', () => {
  let component: LoanComponentsComponent;
  let fixture: ComponentFixture<LoanComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoanComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoanComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
