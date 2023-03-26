import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService) { }

  isLoggedIn: boolean = false;

  ngOnInit() {
    this.AuthenticationService.currentIsLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  logout() {
    localStorage.removeItem("token");
    this.AuthenticationService.changeIsLoggedIn(false);
  }
}
