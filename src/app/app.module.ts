import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EmployeesModule } from './employees/employees.module';
import { SkillsModule } from './skills/skills.module';

import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// 'Angular Material' components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [AppComponent, HomeComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    EmployeesModule, // Load 'Employee table' module.
    SkillsModule, // Load 'Skill table' module.
    // Important note:
    // The 'App module' must be put below other existing modules to avoid
    // conflicts during the path resolution process.
    AppRoutingModule, // App module
    // Important note:
    // This is the start of loading 'Angular Material' components.
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
