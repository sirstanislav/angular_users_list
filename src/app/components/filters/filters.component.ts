import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BankType } from 'src/types/filtersTypes';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {

  submit = false;

  constructor(private fb: FormBuilder) { }

  bankingForm = this.fb.group({})

  @Input() payload: BankType = {} as BankType

  ngOnInit() {
    this.payload.filtri.forEach(filter => {
      if (filter.type === "checkbox") {
        this.bankingForm.addControl(
          filter.name || '',
          this.fb.control('', [Validators.requiredTrue]));
      } else if (filter.element === 'textarea') {
        this.bankingForm.addControl(
          filter.name || '',
          this.fb.control('', [Validators.required]));
      } else if (filter.type === "select") {
        this.bankingForm.addControl(
          filter.name || '',
          this.fb.control('', [Validators.required]));
      } else {
        this.bankingForm.addControl(
          filter.name || '',
          this.fb.control('',
            [Validators.required,
            filter.type === "email" ? Validators.email : Validators.nullValidator,
            filter.type === "tel" ? Validators.pattern('^\\+(?:[0-9] ?){6,14}[0-9]$') : Validators.nullValidator,
            ]));
      }
    });
  }

  @Output() submitEvent = new EventEmitter<{}>();

  onSubmit() {
    this.submit = true;

    if (this.bankingForm.invalid) {
      return
    } else {
      this.submitEvent.emit(this.bankingForm.value);
    }
  }
}
