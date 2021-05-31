import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillTableComponent } from './skill-table/skill-table.component';
import { SkillFormComponent } from './skill-form/skill-form.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [SkillTableComponent, SkillFormComponent, InputComponent],
  imports: [CommonModule, SkillsRoutingModule, ReactiveFormsModule],
})
export class SkillsModule {}
