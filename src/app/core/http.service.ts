import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CalendarEvent } from '../models/calendar-event';
import { Course } from '../models/course';
import { MensaPlan } from '../models/mensa-plan';

const CourseRoute = 'courses';
const EventsRoute = 'events';
const MensaRoute = 'mensa';
const LecturesForCourseRoute = 'lectures/';

@Injectable()
export class HttpService {

  private static SERVER = environment.backendUrl;

  constructor(private httpClient: HttpClient) { }

  getMensaPlan(): Promise<MensaPlan> {
    return this.httpClient.get<MensaPlan>(HttpService.SERVER + MensaRoute)
    .toPromise()
    .catch(this.handleError);
  }

  getCourses(): Promise<Course[]> {
    return this.httpClient.get<Course[]>(HttpService.SERVER + CourseRoute)
    .toPromise()
    .catch(this.handleError);
  }

  getStuvEvents(): Promise<CalendarEvent[]> {
    return this.httpClient.get<CalendarEvent[]>(HttpService.SERVER + EventsRoute)
    .toPromise()
    .catch(this.handleError);
  }

  getLecturesForCourseTitle(courseTitel: String): Promise<CalendarEvent[]> {
    return this.httpClient.get<CalendarEvent[]>(HttpService.SERVER + LecturesForCourseRoute + courseTitel)
    .toPromise()
    .catch(this.handleError);
  }

  getLecturesForCourse(course: Course): Promise<CalendarEvent[]> {
    return this.httpClient.get<CalendarEvent[]>(HttpService.SERVER + LecturesForCourseRoute + course.courseTitle)
    .toPromise()
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
