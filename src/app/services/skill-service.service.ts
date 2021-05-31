import { Injectable } from '@angular/core';

interface Skill {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  skills: Array<Skill> = [];

  constructor() {}

  getSkills() {
    return this.skills;
  }

  setSkills(employee: Skill) {
    this.skills = [...this.skills, employee];
    console.info('Updated skills data', this.skills);
  }
}
