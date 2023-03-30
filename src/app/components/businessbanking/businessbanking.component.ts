import { Component } from '@angular/core';
import { businessBankingFilters } from 'src/consts/filtersArrays';

@Component({
  selector: 'app-businessbanking',
  templateUrl: './businessbanking.component.html',
  styleUrls: ['./businessbanking.component.scss']
})

export class BusinessbankingComponent {

  filters = businessBankingFilters;
  table: {} = {}

  receiveSubmit($event: {}) {
    this.table = $event
  }
}
