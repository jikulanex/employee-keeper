import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFormHomeComponent } from './employee-form-home.component';

describe('EmployeeFormHomeComponent', () => {
  let component: EmployeeFormHomeComponent;
  let fixture: ComponentFixture<EmployeeFormHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeFormHomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFormHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
