import { Component } from '@angular/core';
import { usersDataArray } from 'src/consts/usersDataArray';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {
  usersData = usersDataArray;

  constructor(private SearchService: SearchService) { }

  ngOnInit() {
    this.SearchService.currentSearch.subscribe(({ search }: Partial<{ search: string | '' }>) => {
      this.usersData = usersDataArray.filter((user) => {
        return user.firstName.toLowerCase().includes(search || '') || user.lastName.toLowerCase().includes(search || '') || user.age.toString().includes(search || '');
      })
    })
    this.usersData = usersDataArray;
  }
}
