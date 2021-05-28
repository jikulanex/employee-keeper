import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css'],
})
export class EmployeeTableComponent implements OnInit {
  today = new Date().getFullYear();

  employeeData = [
    {
      id: 0,
      firstName: 'Sieg',
      lastName: 'Balona',
      birthDate: '1988-07-31',
      skills: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'birthDate',
    'age',
    'skills',
    'controls',
  ];

  constructor() {}

  ngOnInit(): void {}

  getAge(birthDate: string) {
    return this.today - new Date(birthDate).getFullYear();
  }
}
