import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { Course } from '../../models/course';
import { FormControl } from '@angular/forms';
import { CookieService, CookieOptions } from 'ngx-cookie';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  selectedCourse: Course;
  courseList: Course[];
  @Output() courseChangeTitle = new EventEmitter<String>();
  myControl: FormControl = new FormControl();

  constructor(
    private _httpService: HttpService,
    private _cookieService: CookieService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.loadCourseList();
  }

  getCourseCookie() {
    const selectedCourse = this._cookieService.get(environment.selectedCourseKey);

    if ( selectedCourse && this.courseList ) {
      this.selectedCourse = this.courseList.find( course => course.courseTitle === selectedCourse );
    }
  }

  loadCourseList() {
    this._httpService.getCourses().then( courses => {
      this.courseList = courses;
      this.sortCourseList();
      this.getCourseCookie();
    });
  }

  sortCourseList() {
    this.courseList.sort( (a: Course, b: Course) => {
      if (a.courseTitle < b.courseTitle) {
        return -1;
      } else if (a.courseTitle > b.courseTitle) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  onCourseSelect(course: Course) {
    this._cookieService.put(environment.selectedCourseKey, course.courseTitle.valueOf());
    this.selectedCourse = course;
    this.courseChangeTitle.emit(course.courseTitle);
  }
}
