import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpService } from '../core/http.service';
import { BrowserModule } from '@angular/platform-browser';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CookieService, CookieModule } from 'ngx-cookie';
import { RouterModule } from '@angular/router';
import { EventsGroupedComponent } from './event-list/events-grouped/events-grouped.component';
import { GroupByPipe } from './pipes/group-by.pipe';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event-list/events-grouped/event/event.component';
import { MatchHeightDirective } from './directives/match-height.directive';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    MDBBootstrapModule.forRoot()
  ],
  declarations: [
    HeaderComponent,
    EventComponent,
    EventsGroupedComponent,
    GroupByPipe,
    EventListComponent,
    MatchHeightDirective
  ],
  providers: [
    HttpService
  ],
  exports: [
    HeaderComponent,
    EventListComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class SharedModule { }
