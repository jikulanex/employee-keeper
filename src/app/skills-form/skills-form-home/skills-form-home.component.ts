import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-skills-form-home',
  templateUrl: './skills-form-home.component.html',
  styleUrls: ['./skills-form-home.component.css'],
})
export class SkillsFormHomeComponent implements OnInit {
  skillsForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
  });

  constructor() {
    console.log(this.skillsForm.controls.name);
  }

  ngOnInit(): void {}
}
