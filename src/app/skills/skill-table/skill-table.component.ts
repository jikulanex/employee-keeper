import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  formIsSubmitted = false;
  skills: Array<Skill> = [];

  thHead = Array(21)
    .fill('')
    .map((x, i) => i);

  thBody = Array(20)
    .fill('')
    .map((x, i) => i);

  constructor(
    private router: Router,
    private skillService: SkillService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    // Fetch existing skill data.
    const data: any = this.localStorageService.getItem('skills');

    if (data?.length) {
      this.skills = JSON.parse(data);
      return;
    }

    this.skills = this.skillService.getSkills();
  }

  editSkill(skill: Skill) {
    console.log('Skill data', skill);
    this.router.navigate([`/update-skill-form/${skill.id}`]);
  }

  deleteSkill(skill: Skill) {
    // Filter out data based on the given skill id.
    const updatedSkillData = this.skills.filter(
      (data) => data.id !== Number(skill.id)
    );
    console.log('Updated skill data', updatedSkillData);

    // Update the skills array data.
    this.skillService.updateSkills(updatedSkillData);

    // Store the skills array data to local storage.
    this.localStorageService.setItem('skills', this.skillService.getSkills());

    // Reload page
    window.location.reload();

    this.displayNotification();
  }

  displayNotification() {
    this.formIsSubmitted = true;

    setTimeout(() => {
      this.formIsSubmitted = false;
    }, 2000);
  }
}
