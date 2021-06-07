import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Skill {
  _id: string;
  name: string;
  __v?: number;
}

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  skills: Array<Skill> = [];

  constructor(private http: HttpClient) {}

  getSkills() {
    return this.http.get('http://localhost:5000/api/v1/skills');
  }

  getSkill(id: string) {
    return this.http.get(`http://localhost:5000/api/v1/skills/${id}`);
  }

  setSkill(skill: Skill) {
    return this.http.post(`http://localhost:5000/api/v1/skills`, {
      name: skill.name,
    });
  }

  updateSkill(id: string, skill: Skill) {
    return this.http.put(`http://localhost:5000/api/v1/skills/${id}`, {
      name: skill.name,
    });
  }

  deleteSkill(id: string) {
    return this.http.delete(`http://localhost:5000/api/v1/skills/${id}`);
  }
}
