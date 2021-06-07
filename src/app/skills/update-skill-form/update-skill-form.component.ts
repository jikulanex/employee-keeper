import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SkillService } from 'src/app/services/skill-service.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

interface Skill {
  _id: string;
  name: string;
  __v?: number;
}

@Component({
  selector: 'app-update-skill-form',
  templateUrl: './update-skill-form.component.html',
  styleUrls: ['./update-skill-form.component.css'],
})
export class UpdateSkillFormComponent implements OnInit {
  skill: any;
  skills: Array<Skill> = [];
  skillId!: string;
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
    this.skillService.getSkills().subscribe((response: any) => {
      if (localStorageData?.length) {
        // When the data length from local storage is smaller than the data length from the database.
        if (localStorageData?.length < response.data?.length) {
          console.info('Http get response', response);

          // Assign the data from database.
          this.skills = response.data;

          // Log data take from database.
          console.info('Existing skills', this.skills);

          return;
        }
        // Assign the data from local storage.
        this.skills = JSON.parse(localStorageData);

        // Log data take from local storage.
        console.info('Existing skills', this.skills);

        return;
      }

      console.info('Http get response', response);
      // Assign the data from database since at this point local storage returns null.
      this.skills = response.data;

      // Log data take from database.
      console.info('Existing skills', this.skills);
    });

    // Fetch skill ID data.
    this.skillId = this.activatedRoute.snapshot.params['id'];
    console.info('Fetch skill ID', this.skillId);

    // Extract skill data with the given ID.
    this.skillService.getSkill(this.skillId).subscribe((response: any) => {
      const skillData = response.data;
      console.info('Fetched skill data', skillData);

      this.skill = skillData;
      // Programmatically set the text field with the skill name data.
      this.skillsForm.setValue({ name: skillData?.name });
    });
  }

  onSubmit() {
    console.info('Form data submitted', this.skillsForm.value);

    // Update the skills array data.
    this.skillService
      .updateSkill(this.skillId, this.skillsForm.value)
      .subscribe((response) => {
        console.info('Http put response', response);

        this.skillService.getSkills().subscribe((response: any) => {
          console.info('Http get response', response);

          // Store the skills array data to local storage.
          this.localStorageService.setItem('skills', response.data);

          // Clear input field.
          this.skillsForm.reset();

          this.displayNotification();
        });
      });
  }

  displayNotification() {
    this.formIsSubmitted = true;

    setTimeout(() => {
      this.formIsSubmitted = false;
    }, 2000);
  }
}
