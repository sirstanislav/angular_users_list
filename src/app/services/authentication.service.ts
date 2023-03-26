import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private IsLoggedInSource = new BehaviorSubject<boolean>(false);
  currentIsLoggedIn = this.IsLoggedInSource.asObservable();

  private userId = new BehaviorSubject<string>(localStorage.getItem('userId') || '');
  curentUserId = this.userId.asObservable();

  private hasPermision = new BehaviorSubject<boolean>(false);
  currentHasPermision = this.userId.asObservable();

  constructor() { }

  changeIsLoggedIn(isLoggedIn: boolean) {
    this.IsLoggedInSource.next(isLoggedIn);
  }
  changeUserId(userId: string) {
    this.userId.next(userId);
  }

  changeHasPermision(permision: boolean) {
    this.hasPermision.next(permision);
  }
}
