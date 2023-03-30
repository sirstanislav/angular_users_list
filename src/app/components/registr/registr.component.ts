import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Signup } from '../../../types/authResponseTypes';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registr',
  templateUrl: './registr.component.html',
  styleUrls: ['./registr.component.scss']
})
export class RegistrComponent {
  submit = false;
  readonly BASE_URL = 'https://movie-expol-api.fly.dev';

  registerForm = this.fb.group({
    name: ['', Validators.required],
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

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  onSubmit():void {
    this.submit = true;
    if (this.registerForm.invalid) {
      return
    } else {
      this.http.post<Signup>(`${this.BASE_URL}/signup`, this.registerForm.value)
        .pipe(
          catchError(this.handleError)
        )
        .subscribe(
          (response) => {
            this.router.navigate(['/signin'])
          },
        )
    }
  }
}
