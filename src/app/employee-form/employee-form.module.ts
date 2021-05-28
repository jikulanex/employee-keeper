import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeFormRoutingModule } from './employee-form-routing.module';
import { EmployeeFormHomeComponent } from './employee-form-home/employee-form-home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';

// Load the shared module to get access to  the 'Form' component.
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmployeeFormHomeComponent],
  imports: [
    CommonModule,
    EmployeeFormRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    SharedModule,
  ],
})
export class EmployeeFormModule {}
