import { Component, OnInit, Input } from '@angular/core';
import { CalendarEvent } from '../../../../models/calendar-event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: CalendarEvent;
  showMoreInfoButton: boolean;
  showMoreInfo: boolean;
  shortDescription: string;

  constructor() { }

  ngOnInit() {
    const cutOffPoint = 140;
    if (this.event) {
      this.showMoreInfoButton = this.event.description.length > cutOffPoint;
      this.showMoreInfo = !this.showMoreInfoButton;
      this.shortDescription = this.event.description.slice(0, cutOffPoint);
    }
  }

  onShowMore() {
    this.showMoreInfo = !this.showMoreInfo;
  }

}
