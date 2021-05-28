import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [TableComponent, FormComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [TableComponent, FormComponent],
})
export class SharedModule {}
