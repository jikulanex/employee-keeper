import { Component, OnInit, Input } from '@angular/core';

interface Skill {
  _id: string;
  name: string;
  __v?: number;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() label!: string;
  @Input() helperText!: string;
  @Input() options!: Array<Skill>;
  @Input() control!: any;

  constructor() {}

  ngOnInit(): void {
    console.log('Form control', this.control);
  }

  // Check if skill should be marked as a selected option.
  checkSelected(skill: Skill) {
    return this.control.value.includes(skill.name);
  }

  // Assigns value to the 'skills' form control.
  setSkill(event: Event) {
    this.control.setValue((event.target as HTMLSelectElement).value);
  }

  // Triggers helper text telling the user the entered input is not valid.
  displayErrorHelperText() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
