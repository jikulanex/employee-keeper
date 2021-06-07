import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeesModule } from './employees/employees.module';
import { SkillsModule } from './skills/skills.module';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule /* Load the `HttpClientModule`. */,
    EmployeesModule /* Load 'Employee table' module. */,
    SkillsModule /* Load 'Skill table' module. */,
    /* Important note: */
    /* The 'App module' must be put below other existing modules to avoid conflicts during the path resolution process. */
    AppRoutingModule /* App module */,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
