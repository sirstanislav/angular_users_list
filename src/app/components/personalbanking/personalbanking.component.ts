import { Component, EventEmitter, Output } from '@angular/core';
import { personalBankingFilters } from 'src/consts/filtersArrays';

@Component({
  selector: 'app-personalbanking',
  templateUrl: './personalbanking.component.html',
  styleUrls: ['./personalbanking.component.scss']
})

export class PersonalbankingComponent {

  filters = personalBankingFilters;
  table: {} = {}

  receiveSubmit($event: {}) {
    this.table = $event
  }
}
