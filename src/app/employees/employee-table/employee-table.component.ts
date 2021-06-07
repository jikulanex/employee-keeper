import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee-service.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

interface Skill {
  _id?: string;
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
      .map((skill) => skill)
      .slice(0, 3)
      .join(', ');
  }

  // Navigate to the update employee form.
  editEmployee(employee: Employee) {
    console.log('Employee data', employee);
    this.router.navigate([`/update-employee-form/${employee._id}`]);
  }

  // Deletes one employee.
  deleteEmployee(employee: Employee) {
    // Update the skills array data.
    this.employeeService.deleteEmployee(employee._id).subscribe((response) => {
      console.log('Http delete response', response);

      this.employeeService.getEmployees().subscribe((response: any) => {
        // Store the skills array data to local storage.
        this.localStorageService.setItem('employees', response.data);

        // Reload page
        window.location.reload();

        this.displayNotification();
      });
    });
  }

  // Displays the notification component.
  displayNotification() {
    this.formIsSubmitted = true;

    setTimeout(() => {
      this.formIsSubmitted = false;
    }, 2000);
  }
}
