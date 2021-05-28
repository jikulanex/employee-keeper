import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Load the shared module to get access to the 'Table' component.
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmployeeTableComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class EmployeesModule {}
