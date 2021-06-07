import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employees: Array<Employee> = [];

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get('http://localhost:5000/api/v1/employees');
  }

  getEmployee(id: string) {
    return this.http.get(`http://localhost:5000/api/v1/employees/${id}`);
  }

  setEmployee(employee: Employee) {
    const { firstName, lastName, birthDate, skills } = employee;

    return this.http.post(`http://localhost:5000/api/v1/employees`, {
      firstName,
      lastName,
      birthDate,
      skills,
    });
  }

  updateEmployee(id: string, employee: Employee) {
    const { firstName, lastName, birthDate, skills } = employee;

    return this.http.put(`http://localhost:5000/api/v1/employees/${id}`, {
      firstName,
      lastName,
      birthDate,
      skills,
    });
  }

  deleteEmployee(id: string) {
    return this.http.delete(`http://localhost:5000/api/v1/employees/${id}`);
  }
}
