import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-table',
  templateUrl: './skill-table.component.html',
  styleUrls: ['./skill-table.component.css'],
})
export class SkillTableComponent implements OnInit {
  skillData = [
    { id: 0, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Node.js' },
  ];

  thHead = Array(21)
    .fill('')
    .map((x, i) => i);

  thBody = Array(20)
    .fill('')
    .map((x, i) => i);

  constructor() {}

  ngOnInit(): void {}
}
