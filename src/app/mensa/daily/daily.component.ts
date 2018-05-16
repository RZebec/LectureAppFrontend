import { Component, OnInit, Input } from '@angular/core';
// import { DailyPlan } from '../../models/daily-plan';
import { DailyPlan } from '../../models/mensa-plan';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {
  weekday = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  @Input() dailyPlan: DailyPlan;

  constructor() { }

  ngOnInit() {
  }

}
