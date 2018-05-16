import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LecturesComponent } from './lectures/lectures.component';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { MensaComponent } from './mensa/mensa.component';

const ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'events',
    pathMatch: 'full'
  },
  {
    path: 'events',
    component: EventsComponent,
    pathMatch: 'full'
  },
  {
    path: 'mensa',
    component: MensaComponent,
    pathMatch: 'full'
  },
  {
    path: 'lectures/:courseTitle',
    component: LecturesComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [],
  providers: [ ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
