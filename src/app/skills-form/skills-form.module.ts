import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SkillsFormRoutingModule } from './skills-form-routing.module';
import { SkillsFormHomeComponent } from './skills-form-home/skills-form-home.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [SkillsFormHomeComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule, SkillsFormRoutingModule],
})
export class SkillsFormModule {}
