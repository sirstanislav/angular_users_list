import { inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { CanActivateFn, Router, } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';

export const CheckTokenGuard: CanActivateFn = () => {
  const router = inject(Router);
  const http = inject(HttpClient);
  const isUserLoggedIn = inject(AuthenticationService);
  const BASE_URL = 'https://movie-expol-api.fly.dev';

  return new Promise((resolve) => {
    if (localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const headers = new HttpHeaders().set('Authorization', token || '');
      if (token) {
        http.get(`${BASE_URL}/users/me`, { headers })
          .pipe(
            catchError(err => {
              resolve(false);
              router.navigate(['/signin'])
              return throwError(() => new Error('Something bad happened; please try again later.'));
            })
          )
          .subscribe((res: any) => {
            resolve(true);
            isUserLoggedIn.changeIsLoggedIn(true);
          })
      }
    } else {
      router.navigate(['/signin'])
    }
  })
}


// import { Injectable } from "@angular/core";
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { Observable } from "rxjs";
// import { tap } from "rxjs/operators";
// import { AuthenticationService } from "../services/authentication.service";

// @Injectable({
//   providedIn: "root"
// })

// export class AdminGuard implements CanActivate {
//   constructor(private authService: AuthenticationService, private router: Router) { }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//     console.log("this.authService.currentIsLoggedIn", this.authService.currentIsLoggedIn);
//     return this.authService.currentIsLoggedIn.pipe(
//       tap((isLoggedIn: boolean) => {
//         if (!isLoggedIn) {
//           this.router.navigate(['/signin'])
//         }
//       })
//     )
//   }
// }
