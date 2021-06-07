import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee-service.service';
import { SkillService } from 'src/app/services/skill-service.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

interface Skill {
  _id: string;
  name: string;
  __v?: number;
}

interface Employee {
  _id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  skills: Array<Skill>;
  __v?: number;
}

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
})
export class EmployeeFormComponent implements OnInit {
  formIsSubmitted = false;

  employeeForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]),
    skills: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
  });

  employees: Array<Employee> = [];

  skills: Array<Skill> = [];

  constructor(
    private employeeService: EmployeeService,
    private skillService: SkillService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    // Fetch existing employee data.
    const localStorageEmployeeData: string | null =
      this.localStorageService.getItem('employees');

    this.employeeService.getEmployees().subscribe((response: any) => {
      if (localStorageEmployeeData?.length) {
        // When the data length from local storage is smaller than the data length from the database.
        if (localStorageEmployeeData?.length < response.data?.length) {
          console.info('Http get response', response);

          // Assign the data from database.
          this.employees = response.data;
          return;
        }
        // Assign the data from local storage.
        this.employees = JSON.parse(localStorageEmployeeData);
        return;
      }

      console.info('Http get response', response);
      // Assign the data from database since at this point local storage returns null.
      this.employees = response.data;
    });

    // Fetch existing skill data.
    const localStorageSkillData: string | null =
      this.localStorageService.getItem('skills');

    this.skillService.getSkills().subscribe((response: any) => {
      if (localStorageSkillData?.length) {
        // When the data length from local storage is smaller than the data length from the database.
        if (localStorageSkillData?.length < response.data?.length) {
          console.info('Http get response', response);

          // Assign the data from database.
          this.skills = response.data;
          return;
        }
        // Assign the data from local storage.
        this.skills = JSON.parse(localStorageSkillData);
        return;
      }

      console.info('Http get response', response);
      // Assign the data from database since at this point local storage returns null.
      this.skills = response.data;
    });
  }

  onSubmit() {
    console.info('Form submitted', this.employeeForm.value);

    // Update the skills array data.
    this.employeeService
      .setEmployee(this.employeeForm.value)
      .subscribe((response) => {
        console.info('Http post response', response);

        this.employeeService.getEmployees().subscribe((response: any) => {
          console.info('Http get response', response);

          // Store the skills array data to local storage.
          this.localStorageService.setItem('employees', response.data);

          // Clear input field.
          this.employeeForm.reset();

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
