import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { CustomDatePipe } from './pipes/custom-date.pipe';
import { CardComponent } from './components/card/card.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccessComponent } from './components/access/access.component';
import { RegistrComponent } from './components/registr/registr.component';
import { FiltersComponent } from './components/filters/filters.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { SearchuserComponent } from './components/searchuser/searchuser.component';
import { PersonalbankingComponent } from './components/personalbanking/personalbanking.component';
import { BusinessbankingComponent } from './components/businessbanking/businessbanking.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoginComponent,
    CardsComponent,
    CustomDatePipe,
    AccessComponent,
    NavbarComponent,
    RegistrComponent,
    FiltersComponent,
    MainpageComponent,
    SearchuserComponent,
    PersonalbankingComponent,
    BusinessbankingComponent,
  ],
  imports: [
    BrowserModule,
    HighlightModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          typescript: () => import('highlight.js/lib/languages/typescript'),
          css: () => import('highlight.js/lib/languages/css'),
          xml: () => import('highlight.js/lib/languages/xml')
        },
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
