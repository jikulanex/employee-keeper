import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillTableComponent } from './skill-table/skill-table.component';
import { SkillFormComponent } from './skill-form/skill-form.component';
import { UpdateSkillFormComponent } from './update-skill-form/update-skill-form.component';

const routes: Routes = [
  { path: 'skill-table', component: SkillTableComponent },
  { path: 'skill-form', component: SkillFormComponent },
  { path: 'update-skill-form/:id', component: UpdateSkillFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsRoutingModule {}
