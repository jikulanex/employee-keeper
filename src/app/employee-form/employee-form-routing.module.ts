import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormHomeComponent } from './employee-form-home/employee-form-home.component';

// Important note:
// Since the 'Employee form' module is being lazy-loaded in the 'app-routing.module.ts',
// the 'path' property must be left blank or empty.
const routes: Routes = [{ path: '', component: EmployeeFormHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeFormRoutingModule {}
