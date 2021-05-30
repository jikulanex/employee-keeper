import { Component, OnInit, Input } from '@angular/core';

interface Skill {
  id: number;
  name: string;
}

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit {
  @Input() label!: string;
  @Input() helperText!: string;
  @Input() options!: Skill[];
  @Input() control!: any;

  constructor() {}

  ngOnInit(): void {
    console.log('Form control', this.control);
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
