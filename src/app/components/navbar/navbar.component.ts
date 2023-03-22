import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
  searchForm = this.fb.group({
    search: [''],
  })
  constructor(private fb: FormBuilder, private searchValue: SearchService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: '',
    })

    this.searchForm.valueChanges.subscribe(searchValues => {
      this.searchValue.onChange({ search: searchValues.search?.toLowerCase() });
    })
  }
}
