import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { CalendarEvent } from '../../models/calendar-event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  shownEvents: CalendarEvent[];
  filterDate: number = Date.now();
  eventsByDate = new Array<CalendarEvent[]>();
  @Input() events: CalendarEvent[];
  @Input() title: string;

  constructor(
  ) { }

  ngOnInit() {
    if (this.events) {
      this.applyFilter();
    }
  }

  applyFilter() {
    this.shownEvents = this.events.filter(event => event.end >= this.filterDate);
  }

  showOlderEvents() {
    this.filterDate = this.filterDate - new Date(1970, 0, 7).getTime();
    const shownEventCount = this.shownEvents.length;
    this.applyFilter();
    if ( this.shownEvents.length <= shownEventCount ) {
      this.showOlderEvents();
    }
  }

  resetFilter() {
    this.filterDate = Date.now();
    this.applyFilter();
  }
}
