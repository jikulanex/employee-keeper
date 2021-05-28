import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillTableComponent } from './skill-table/skill-table.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Load the shared module to get access to the 'Table' component.
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SkillTableComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class SkillsModule {}
