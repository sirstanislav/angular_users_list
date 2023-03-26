import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

export const UseridGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authentication = inject(AuthenticationService);

  return new Promise((resolve) => {
    authentication.curentUserId.subscribe(userId => {
      if (userId === '641cadc165fd649726cfd0a9') {
        resolve(false);
        router.navigate(['/access'])
      } else {
        authentication.changeHasPermision(true);
        resolve(true);
      }
    })
  })
}
