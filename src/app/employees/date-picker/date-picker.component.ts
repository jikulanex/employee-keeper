import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
})
export class DatePickerComponent implements OnInit {
  @Input() label!: string;
  @Input() helperText!: string;
  @Input() control!: any;

  constructor() {}

  ngOnInit(): void {
    console.log('Form control', this.control);
  }

  // Triggers helper text telling the user the entered input is not valid.
  displayErrorHelperText() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
