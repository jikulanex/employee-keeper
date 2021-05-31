import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee-service.service';
import { SkillService } from '../../services/skill-service.service';
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
    this.employees = this.employeeService.getEmployees();

    // Fetch skills data stored from local storage
    const skillsData: any = this.localStorageService.getItem('skills');

    // When skills data exist from local storage, assign it to `skills` class property.
    if (skillsData?.length) {
      this.skills = JSON.parse(skillsData);
      return;
    }

    this.skills = this.skillService.getSkills();
  }

  onSubmit() {
    console.info('Form submitted', this.employeeForm.value);

    const employee = {
      id: this.employees.length + 1,
      ...this.employeeForm.value,
    };

    // Update the employee array data.
    this.employeeService.setEmployees(employee);

    // Store the employee array data to local storage.
    this.localStorageService.setItem(
      'employees',
      this.employeeService.getEmployees()
    );

    // Clear input fields.
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
