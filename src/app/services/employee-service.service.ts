import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Array<Employee> = [];

  constructor() {}

  getEmployees() {
    return this.employees;
  }

  setEmployees(employee: Employee) {
    this.employees = [...this.employees, employee];
    console.info('Updated employee data', this.employees);
  }
}
