import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee-service.service';

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

  employeeData: Array<Employee> = [];

  displayedColumns = [
    'id',
    'firstName',
    'lastName',
    'birthDate',
    'age',
    'skills',
    'controls',
  ];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeData = this.employeeService.getEmployees();
  }

  getAge(birthDate: string) {
    return this.today - new Date(birthDate).getFullYear();
  }

  displaySkills(skills: Array<Skill>) {
    return skills.map((skill) => skill.name).join(', ');
  }
}
