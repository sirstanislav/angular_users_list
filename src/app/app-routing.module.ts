import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegistrComponent } from './components/registr/registr.component';
import { CheckTokenGuard } from './guards/check-token.guard'
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { UseridGuard } from './guards/userid.guard';
import { AccessComponent } from './components/access/access.component';

const routes: Routes = [
  {
    path: '', canActivate: [CheckTokenGuard], component: NavbarComponent, children: [
      { path: '', component: MainpageComponent },
    ]
  },
  {
    path: '', canActivate: [CheckTokenGuard, UseridGuard], component: NavbarComponent, children: [
      { path: 'users', component: CardsComponent },
    ]
  },
  {
    path: '', canActivate: [CheckTokenGuard], component: NavbarComponent, children: [
      { path: 'access', component: AccessComponent },
    ]
  },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegistrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
