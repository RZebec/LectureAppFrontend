import { Component, OnInit } from '@angular/core';
import { CalendarEvent } from '../models/calendar-event';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../core/http.service';
import { Course } from '../models/course';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.scss']
})
export class LecturesComponent implements OnInit {
  lectures: CalendarEvent[];
  selectedCourseTitle: String;

  constructor(
    private _httpService: HttpService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.selectedCourseTitle = params['courseTitle'];
      this.loadLectures();
   });
  }

  loadLectures() {
    if (this.selectedCourseTitle) {
        this._httpService.getLecturesForCourseTitle(this.selectedCourseTitle).then(lectures => {
        this.lectures = lectures;
      });
    }
  }
}
