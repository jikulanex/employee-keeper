import { Component, OnInit } from '@angular/core';

interface Employee {
  firstName: string;
  lastName: string;
  birthDate: string;
}

@Component({
  selector: 'app-employee-form-home',
  templateUrl: './employee-form-home.component.html',
  styleUrls: ['./employee-form-home.component.css'],
})
export class EmployeeFormHomeComponent implements OnInit {
  employee: Employee = {
    firstName: 'Sieg',
    lastName: 'Balona',
    birthDate: '1988-07-31',
  };

  constructor() {}

  ngOnInit(): void {}

  setFirstname = (event: Event) => {
    // Enable the commented out code below during debugging.
    // console.log('Firstname', (event.target as HTMLInputElement).value);
    this.employee.firstName = (event.target as HTMLInputElement).value;
  };

  setLastname = (event: Event) => {
    // Enable the commented out code below during debugging.
    // console.log('Lastname', (event.target as HTMLInputElement).value);
    this.employee.lastName = (event.target as HTMLInputElement).value;
  };

  setBirthdate = (event: any) => {
    // Enable the commented out code below during debugging.
    // console.log('Birthdate', (event.target as HTMLInputElement).value);
    this.employee.birthDate = (event.target as HTMLInputElement).value;
  };
}
