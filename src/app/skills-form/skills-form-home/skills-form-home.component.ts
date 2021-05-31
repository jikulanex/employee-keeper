import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SkillService } from '../../services/skill-service.service';

interface Skill {
  id: number;
  name: string;
}

@Component({
  selector: 'app-skills-form-home',
  templateUrl: './skills-form-home.component.html',
  styleUrls: ['./skills-form-home.component.css'],
})
export class SkillsFormHomeComponent implements OnInit {
  skillsForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });

  skills: Array<Skill> = [];

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }

  onSubmit() {
    console.info('Form submitted', this.skillsForm.value);

    const skill = { id: this.skills.length + 1, ...this.skillsForm.value };

    this.skillService.setSkills(skill);
  }
}
