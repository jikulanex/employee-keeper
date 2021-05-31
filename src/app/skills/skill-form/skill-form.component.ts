import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SkillService } from '../../services/skill-service.service';
import { LocalStorageService } from '../../services/local-storage.service';

interface Skill {
  id: number;
  name: string;
}

@Component({
  selector: 'app-skill-form',
  templateUrl: './skill-form.component.html',
  styleUrls: ['./skill-form.component.css'],
})
export class SkillFormComponent implements OnInit {
  formIsSubmitted = false;

  skillsForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });

  skills: Array<Skill> = [];

  constructor(
    private skillService: SkillService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    this.skills = this.skillService.getSkills();
  }

  onSubmit() {
    console.info('Form submitted', this.skillsForm.value);

    const skill = { id: this.skills.length + 1, ...this.skillsForm.value };

    // Update the skills array data.
    this.skillService.setSkills(skill);

    // Store the skills array data to local storage.
    this.localStorageService.setItem('skills', this.skillService.getSkills());

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
