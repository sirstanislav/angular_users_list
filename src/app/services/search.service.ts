import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private searchSource = new BehaviorSubject<{}>("");
  currentSearch = this.searchSource.asObservable();

  constructor() { }

  onChange(searchValue: Partial<{ search: string | null }>) {
    this.searchSource.next(searchValue);
  }
}
