import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillTableComponent } from './skill-table/skill-table.component';

@NgModule({
  declarations: [SkillTableComponent],
  imports: [CommonModule, SkillsRoutingModule],
})
export class SkillsModule {}
