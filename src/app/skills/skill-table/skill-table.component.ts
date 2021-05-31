import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill-service.service';
import { LocalStorageService } from '../../services/local-storage.service';

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

  constructor(
    private skillService: SkillService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const data: any = this.localStorageService.getItem('skills');

    if (data?.length) {
      this.skills = JSON.parse(data);
      return;
    }

    this.skills = this.skillService.getSkills();
  }
}
