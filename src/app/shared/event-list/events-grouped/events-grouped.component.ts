import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from '../../../models/calendar-event';

@Component({
  selector: 'app-events-grouped',
  templateUrl: './events-grouped.component.html',
  styleUrls: ['./events-grouped.component.scss']
})
export class EventsGroupedComponent implements OnInit {
  eventDate: number;
  @Input() events: CalendarEvent[];

  constructor() { }

  ngOnInit() {
    if (this.events ) {
      this.eventDate = this.events[0].start;
    }
  }

}
