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
export class RegistrComponent implements OnInit {
  submit = false;
  readonly BASE_URL = 'https://movie-explorer.onrender.com';

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })

    this.registerForm.valueChanges.subscribe(values => { })
  }

  onSubmit() {
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
            console.log(response);
            this.router.navigate(['/login'])
          }
        )
    }
  }
}
