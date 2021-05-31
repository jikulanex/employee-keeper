import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { SkillService } from '../../services/skill-service.service';
import { EmployeeService } from '../../services/employee-service.service';
import { LocalStorageService } from '../../services/local-storage.service';

interface Skill {
  id: number;
  name: string;
}

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  skills: Array<Skill>;
}

@Component({
  selector: 'app-update-employee-form',
  templateUrl: './update-employee-form.component.html',
  styleUrls: ['./update-employee-form.component.css'],
})
export class UpdateEmployeeFormComponent implements OnInit {
  employee: any;
  employees: Array<Employee> = [];
  employeeId!: number;
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
    const localStorageEmployeeData: any =
      this.localStorageService.getItem('employees');
    const localStorageSkillsData: any =
      this.localStorageService.getItem('skills');

    // Fetch existing employee data.
    if (localStorageEmployeeData?.length) {
      this.employees = JSON.parse(localStorageEmployeeData);
    } else {
      this.employees = this.employeeService.getEmployees();
    }
    console.info('Existing employees', this.employees);

    // Fetch existing skill data.
    if (localStorageSkillsData?.length) {
      this.skills = JSON.parse(localStorageSkillsData);
    } else {
      this.skills = this.skillService.getSkills();
    }
    console.info('Existing skills', this.skills);

    // Fetch employee ID data.
    this.employeeId = this.activatedRoute.snapshot.params['id'];
    console.info('Fetch employee ID', this.employeeId);

    // Extract employee data with the given ID.
    this.employee = this.employees.find(
      (employee) => employee.id === Number(this.employeeId)
    );
    console.info('Fetched employee data', this.employee);

    // Programmatically set the text field with the skill name data.
    this.employeeForm.setValue({
      firstName: this.employee?.firstName,
      lastName: this.employee?.lastName,
      skills: this.employee?.skills,
      birthDate: this.employee?.birthDate,
    });
  }

  onSubmit() {
    console.info('Form data submitted', this.employeeForm.value);

    // Update the existing skill data by inserting the new skill name data.
    const updatedSkillData: Array<Employee> = this.employees.map((employee) => {
      if (employee.id === Number(this.employeeId)) {
        return { ...employee, ...this.employeeForm.value };
      }
      return employee;
    });

    // Update the skills array data.
    this.employeeService.updateEmployees(updatedSkillData);

    // Store the skills array data to local storage.
    this.localStorageService.setItem('employees', updatedSkillData);

    // Clear input field.
    this.employeeForm.reset();

    this.displayNotification();
  }

  displayNotification() {
    this.formIsSubmitted = true;

    setTimeout(() => {
      this.formIsSubmitted = false;
    }, 2000);
  }
}
