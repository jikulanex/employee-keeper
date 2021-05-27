import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [EmployeeTableComponent],
  imports: [CommonModule, EmployeesRoutingModule, MatTableModule],
})
export class EmployeesModule {}
