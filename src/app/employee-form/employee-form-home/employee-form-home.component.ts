import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

interface Skill {
  id: number;
  name: string;
}

@Component({
  selector: 'app-employee-form-home',
  templateUrl: './employee-form-home.component.html',
  styleUrls: ['./employee-form-home.component.css'],
})
export class EmployeeFormHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

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
    { id: 0, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 2, name: 'JavaScript' },
    { id: 3, name: 'Node.js' },
    { id: 4, name: 'Angular' },
    { id: 5, name: 'Vue.js' },
    { id: 6, name: 'React.js' },
  ];
}
