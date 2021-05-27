import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Lazy load 'Employee form' module by implementing 'Dynamic import' syntax.
const loadEmployeeFormModule = () => {
  return import('./employee-form/employee-form.module').then((module) => {
    return module.EmployeeFormModule;
  });
};

// Lazy load 'Skills form' module by implementing 'Dynamic import' syntax.
const loadSkillsFormModule = () => {
  return import('./skills-form/skills-form.module').then((module) => {
    return module.SkillsFormModule;
  });
};

const routes: Routes = [
  { path: 'employee-form', loadChildren: loadEmployeeFormModule },
  { path: 'skills-form', loadChildren: loadSkillsFormModule },
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
