import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SkillService } from 'src/app/services/skill-service.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

interface Skill {
  _id: string;
  name: string;
  __v?: number;
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
    // Fetch existing skill data.
    const data: string | null = this.localStorageService.getItem('skills');

    this.skillService.getSkills().subscribe((response: any) => {
      if (data?.length) {
        // When the data length from local storage is smaller than the data length from the database.
        if (data?.length < response.data?.length) {
          console.info('Http get response', response);

          // Assign the data from database.
          this.skills = response.data;
          return;
        }
        // Assign the data from local storage.
        this.skills = JSON.parse(data);
        return;
      }

      console.info('Http get response', response);
      // Assign the data from database since at this point local storage returns null.
      this.skills = response.data;
    });
  }

  onSubmit() {
    console.info('Form submitted', this.skillsForm.value);

    // Update the skills array data.
    this.skillService.setSkill(this.skillsForm.value).subscribe((response) => {
      console.info('Http post response', response);

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
