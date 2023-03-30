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
import { PersonalbankingComponent } from './components/personalbanking/personalbanking.component';
import { BusinessbankingComponent } from './components/businessbanking/businessbanking.component';

const routes: Routes = [
  {
    path: '', component: NavbarComponent, children: [
      { path: '', component: MainpageComponent },
    ]
  },
  {
    path: 'users', canActivate: [CheckTokenGuard, UseridGuard], component: NavbarComponent, children: [
      { path: '', component: CardsComponent },
    ]
  },
  {
    path: 'access', canActivate: [CheckTokenGuard], component: NavbarComponent, children: [
      { path: '', component: AccessComponent },
    ]
  },
  {
    path: 'personal_banking', canActivate: [CheckTokenGuard], component: NavbarComponent, children: [
      { path: '', component: PersonalbankingComponent },
    ]
  },
  {
    path: 'business_banking', canActivate: [CheckTokenGuard], component: NavbarComponent, children: [
      { path: '', component: BusinessbankingComponent },
    ]
  },
  {
    path: 'signin', component: NavbarComponent, children: [
      { path: '', component: LoginComponent },
    ]
  },
  {
    path: 'signup', component: NavbarComponent, children: [
      { path: '', component: RegistrComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
