import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeFormRoutingModule } from './employee-form-routing.module';
import { EmployeeFormHomeComponent } from './employee-form-home/employee-form-home.component';

// Load the shared module to get access to  the 'Form' component.
import { SharedModule } from '../shared/shared.module';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [
    EmployeeFormHomeComponent,
    InputComponent,
    SelectComponent,
    DatePickerComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, EmployeeFormRoutingModule],
})
export class EmployeeFormModule {}
