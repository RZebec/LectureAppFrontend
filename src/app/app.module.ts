import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HttpService } from './core/http.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LecturesComponent } from './lectures/lectures.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CookieModule, CookieService } from 'ngx-cookie';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventsComponent } from './events/events.component';
import { MensaComponent } from './mensa/mensa.component';
import { DailyComponent } from './mensa/daily/daily.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LecturesComponent,
    EventsComponent,
    MensaComponent,
    DailyComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    CookieModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    SharedModule
  ],
  providers: [
    HttpService,
    CookieService,
    {
      provide: LocationStrategy, 
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
