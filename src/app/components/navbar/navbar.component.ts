import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  constructor(private AuthenticationService: AuthenticationService, private router: Router) { }

  isLoggedIn: boolean = false;
  curentLink: string = this.router.url;
  isToken: boolean = !!localStorage.getItem('token');

  ngOnInit() {
    this.AuthenticationService.currentIsLoggedIn.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  logout() {
    this.isToken = false;
    localStorage.removeItem("token");
    this.AuthenticationService.changeIsLoggedIn(false);
  }
}
