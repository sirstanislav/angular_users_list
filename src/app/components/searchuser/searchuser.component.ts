import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-searchuser',
  templateUrl: './searchuser.component.html',
  styleUrls: ['./searchuser.component.scss']
})
export class SearchuserComponent implements OnInit {

  constructor(private fb: FormBuilder, private searchValue: SearchService, private AuthenticationService: AuthenticationService) { }

  searchForm = this.fb.group({
    searchInput: [''],
  })
  isLoggedIn: boolean = false;

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchInput: '',
    })

    this.searchForm.valueChanges.subscribe(searchValues => {
      this.searchValue.onChange({ search: searchValues.searchInput?.toLowerCase() });
    })

    this.AuthenticationService.currentIsLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }
}
