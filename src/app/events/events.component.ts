import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpService } from '../core/http.service';
import { CalendarEvent } from '../models/calendar-event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: CalendarEvent[];

  constructor(
    private _httpService: HttpService
  ) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this._httpService.getStuvEvents().then(events => {
      this.events = events;
    });
  }
}
