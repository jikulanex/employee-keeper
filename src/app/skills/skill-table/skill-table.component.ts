import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-table',
  templateUrl: './skill-table.component.html',
  styleUrls: ['./skill-table.component.css'],
})
export class SkillTableComponent implements OnInit {
  employeeData = [{ id: 0, skill: 'JavaScript' }];

  displayedColumns = ['id', 'skill', 'controls'];

  constructor() {}

  ngOnInit(): void {}
}
