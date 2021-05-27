import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsFormHomeComponent } from './skills-form-home/skills-form-home.component';

// Important note:
// Since the 'Skills form' module is being lazy-loaded in the 'app-routing.module.ts',
// the 'path' property must be left blank or empty.
const routes: Routes = [{ path: '', component: SkillsFormHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SkillsFormRoutingModule {}
