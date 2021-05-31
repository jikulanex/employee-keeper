import { Injectable } from '@angular/core';

interface Skill {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  skills: Array<Skill> = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'Node.js' },
    { id: 5, name: 'Angular' },
    { id: 6, name: 'Vue.js' },
    { id: 7, name: 'React.js' },
  ];

  constructor() {}

  getSkills() {
    return this.skills;
  }

  setSkill(skill: Skill) {
    this.skills = [...this.skills, skill];
    console.info('Updated skills data', this.skills);
  }

  updateSkills(skillsData: Array<Skill>) {
    this.skills = [...skillsData];
    console.info('Mutated skills data', this.skills);
  }
}
