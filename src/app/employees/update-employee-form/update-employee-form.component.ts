import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SkillService } from 'src/app/services/skill-service.service';
import { EmployeeService } from 'src/app/services/employee-service.service';
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
  selector: 'app-update-employee-form',
  templateUrl: './update-employee-form.component.html',
  styleUrls: ['./update-employee-form.component.css'],
})
export class UpdateEmployeeFormComponent implements OnInit {
  employee!: Employee;
  employees: Array<Employee> = [];
  employeeId!: string;
  skills: Array<Skill> = [];
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

  constructor(
    private activatedRoute: ActivatedRoute,
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

    // Fetch employee ID data.
    this.employeeId = this.activatedRoute.snapshot.params['id'];
    console.info('Fetch employee ID', this.employeeId);

    // Extract employee data with the given ID.
    this.employeeService
      .getEmployee(this.employeeId)
      .subscribe((response: any) => {
        const employeeData = response.data;
        console.info('Fetched employee data', employeeData);

        this.employee = employeeData;
        // Programmatically set the text field with the employee data.
        this.employeeForm.setValue({
          firstName: this.employee?.firstName,
          lastName: this.employee?.lastName,
          skills: this.employee?.skills,
          birthDate: this.employee?.birthDate.slice(0, 10),
        });
      });
  }

  onSubmit() {
    console.info('Form data submitted', this.employeeForm.value);

    // Update the employees array data.
    this.employeeService
      .updateEmployee(this.employeeId, this.employeeForm.value)
      .subscribe((response) => {
        console.info('Http put response', response);

        this.employeeService.getEmployees().subscribe((response: any) => {
          console.info('Http get response', response);

          // Store the employees array data to local storage.
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
