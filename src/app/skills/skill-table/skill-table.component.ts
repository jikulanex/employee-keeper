import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill-service.service';

interface Skill {
  id: number;
  name: string;
}

@Component({
  selector: 'app-skill-table',
  templateUrl: './skill-table.component.html',
  styleUrls: ['./skill-table.component.css'],
})
export class SkillTableComponent implements OnInit {
  skills: Array<Skill> = [];

  thHead = Array(21)
    .fill('')
    .map((x, i) => i);

  thBody = Array(20)
    .fill('')
    .map((x, i) => i);

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }
}
