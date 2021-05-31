import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  selector: 'app-employee-form-home',
  templateUrl: './employee-form-home.component.html',
  styleUrls: ['./employee-form-home.component.css'],
})
export class EmployeeFormHomeComponent implements OnInit {
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

  options: Skill[] = [
    { id: 1, name: 'HTML' },
    { id: 2, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'Node.js' },
    { id: 5, name: 'Angular' },
    { id: 6, name: 'Vue.js' },
    { id: 7, name: 'React.js' },
  ];

  employees: Array<Employee> = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
  }

  onSubmit() {
    console.info('Form submitted', this.employeeForm.value);

    const employee = {
      id: this.employees.length + 1,
      ...this.employeeForm.value,
    };

    this.employeeService.setEmployees(employee);
  }
}
