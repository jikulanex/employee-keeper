import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

// Load the shared module to get access to the 'Table' component.
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [EmployeeTableComponent],
  imports: [CommonModule, EmployeesRoutingModule],
})
export class EmployeesModule {}
