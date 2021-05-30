import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SkillsFormRoutingModule } from './skills-form-routing.module';
import { SkillsFormHomeComponent } from './skills-form-home/skills-form-home.component';
import { InputComponent } from './input/input.component';

// Load the shared module to get access to the 'Form' component.
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SkillsFormHomeComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule, SkillsFormRoutingModule],
})
export class SkillsFormModule {}
