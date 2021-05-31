import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SkillService } from '../../services/skill-service.service';
import { LocalStorageService } from '../../services/local-storage.service';

interface Skill {
  id: number;
  name: string;
}

@Component({
  selector: 'app-update-skill-form',
  templateUrl: './update-skill-form.component.html',
  styleUrls: ['./update-skill-form.component.css'],
})
export class UpdateSkillFormComponent implements OnInit {
  skill: any;
  skills: Array<Skill> = [];
  skillId!: number;
  formIsSubmitted = false;

  skillsForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private skillService: SkillService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const localStorageData: any = this.localStorageService.getItem('skills');

    // Fetch existing skill data.
    if (localStorageData?.length) {
      this.skills = JSON.parse(localStorageData);
    } else {
      this.skills = this.skillService.getSkills();
    }
    console.info('Existing skills', this.skills);

    // Fetch skill ID data.
    this.skillId = this.activatedRoute.snapshot.params['id'];
    console.info('Fetch skill ID', this.skillId);

    // Extract skill data with the given ID.
    this.skill = this.skills.find((skill) => skill.id === Number(this.skillId));
    console.info('Fetched skill data', this.skill);

    // Programmatically set the text field with the skill name data.
    this.skillsForm.setValue({ name: this.skill?.name });
  }

  onSubmit() {
    console.info('Form data submitted', this.skillsForm.value);

    // Update the existing skill data by inserting the new skill name data.
    const updatedSkillData: Array<Skill> = this.skills.map((skill) => {
      if (skill.id === Number(this.skillId)) {
        return { ...skill, name: this.skillsForm.value.name };
      }
      return skill;
    });

    // Update the skills array data.
    this.skillService.updateSkills(updatedSkillData);

    // Store the skills array data to local storage.
    this.localStorageService.setItem('skills', updatedSkillData);

    // Clear input field.
    this.skillsForm.reset();

    this.displayNotification();
  }

  displayNotification() {
    this.formIsSubmitted = true;

    setTimeout(() => {
      this.formIsSubmitted = false;
    }, 2000);
  }
}
