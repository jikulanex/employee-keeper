import { Component, OnInit } from '@angular/core';
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
    private employeeService: EmployeeService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const data: any = this.localStorageService.getItem('employees');

    if (data?.length) {
      this.employees = JSON.parse(data);
      return;
    }

    this.employees = this.employeeService.getEmployees();
  }

  getAge(birthDate: string) {
    return this.today - new Date(birthDate).getFullYear();
  }

  displaySkills(skills: Array<Skill>) {
    return skills.map((skill) => skill.name).join(', ');
  }
}
