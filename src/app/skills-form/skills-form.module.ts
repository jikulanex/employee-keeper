import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsFormRoutingModule } from './skills-form-routing.module';
import { SkillsFormHomeComponent } from './skills-form-home/skills-form-home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';

// Load the shared module to get access to the 'Form' component.
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SkillsFormHomeComponent],
  imports: [
    CommonModule,
    SkillsFormRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    SharedModule,
  ],
})
export class SkillsFormModule {}
