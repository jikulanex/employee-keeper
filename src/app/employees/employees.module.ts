import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    EmployeeTableComponent,
    EmployeeFormComponent,
    DatePickerComponent,
    InputComponent,
    SelectComponent,
  ],
  imports: [CommonModule, EmployeesRoutingModule, ReactiveFormsModule],
})
export class EmployeesModule {}
