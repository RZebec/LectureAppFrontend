import { Component, OnInit } from '@angular/core';
import { Course } from './models/course';
import { CalendarEvent } from './models/calendar-event';
import { HttpService } from './core/http.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CookieService } from 'ngx-cookie';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedCourseTitle: string;

  constructor(
    private _router: Router,
    private _cookieService: CookieService
  ) { }

  ngOnInit() {
    const selectedCourse = this._cookieService.get(environment.selectedCourseKey);
    if ( selectedCourse ) {
      this.selectedCourseTitle = selectedCourse;
    }
  }

  onCourseSelection(courseTitle: string) {
    this.selectedCourseTitle = courseTitle;
    this._router.navigate( ['lectures', courseTitle]);
  }
}
