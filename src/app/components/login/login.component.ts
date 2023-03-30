import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  submit = false;
  readonly BASE_URL = 'https://movie-expol-api.fly.dev';

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router, private AuthenticationService: AuthenticationService) { }

  onSubmit(): void {
    this.submit = true;

    if (this.loginForm.invalid) {
      return
    } else {
      this.http.post(`${this.BASE_URL}/signin`, this.loginForm.value)
        .pipe(
          catchError(this.handleError)
        )
        .subscribe((response: any) => {
          localStorage.setItem("token", response.token);
          localStorage.setItem("userId", response.userId);
          this.AuthenticationService.changeIsLoggedIn(true);
          this.AuthenticationService.changeUserId(response.userId);
          this.router.navigate(['/'])
        })
    }
  }
}
