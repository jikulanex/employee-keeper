import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  modalIsOpen = false;

  formIsSubmitted = false;

  today = new Date().getFullYear();

  employees: Array<Employee> = [];

  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'birthDate',
    'age',
    'skills',
    'controls',
  ];

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    // Fetch existing skill data.
    const localStorageData: any = this.localStorageService.getItem('employees');

    if (localStorageData?.length) {
      this.employees = JSON.parse(localStorageData);
      console.log('Existing employee data', this.employees);
      return;
    }

    this.employees = this.employeeService.getEmployees();
    console.log('Existing employee data', this.employees);
  }

  // Displays the employee details.
  displayEmployeeDetails() {
    this.modalIsOpen = true;
  }

  // Hides the employee details.
  hideEmployeeDetails() {
    this.modalIsOpen = false;
  }

  // Computes the age based on the given birthdate.
  getAge(birthDate: string) {
    return this.today - new Date(birthDate).getFullYear();
  }

  // Displays on 3 skills in the table and hides the rest.
  displaySkills(skills: Array<Skill>) {
    return skills
      .map((skill) => skill.name)
      .slice(0, 3)
      .join(', ');
  }

  // Navigate to the update employee form.
  editEmployee(employee: Employee) {
    console.log('Employee data', employee);
    this.router.navigate([`/update-employee-form/${employee.id}`]);
  }

  // Deletes one employee.
  deleteEmployee(employee: Employee) {
    // Filter out data based on the given skill id.
    const updatedEmployeeData = this.employees.filter(
      (data) => data.id !== Number(employee.id)
    );
    console.log('Updated employee data', updatedEmployeeData);

    // Update the skills array data.
    this.employeeService.updateEmployees(updatedEmployeeData);

    // Store the skills array data to local storage.
    this.localStorageService.setItem(
      'employees',
      this.employeeService.getEmployees()
    );

    // Reload page
    window.location.reload();

    this.displayNotification();
  }

  // Displays the notification component.
  displayNotification() {
    this.formIsSubmitted = true;

    setTimeout(() => {
      this.formIsSubmitted = false;
    }, 2000);
  }
}
