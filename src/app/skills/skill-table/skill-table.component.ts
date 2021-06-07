import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/services/skill-service.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

interface Skill {
  _id: string;
  name: string;
  __v?: number;
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

  editSkill(skill: Skill) {
    console.log('Skill data', skill);
    this.router.navigate([`/update-skill-form/${skill._id}`]);
  }

  deleteSkill(skill: Skill) {
    // Update the skills array data.
    this.skillService.deleteSkill(skill._id).subscribe((response) => {
      console.log('Http delete response', response);

      this.skillService.getSkills().subscribe((response: any) => {
        // Store the skills array data to local storage.
        this.localStorageService.setItem('skills', response.data);

        // Reload page
        window.location.reload();

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
