import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsFormRoutingModule } from './skills-form-routing.module';
import { SkillsFormHomeComponent } from './skills-form-home/skills-form-home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SkillsFormHomeComponent],
  imports: [
    CommonModule,
    SkillsFormRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class SkillsFormModule {}
