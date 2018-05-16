import { Pipe, PipeTransform } from '@angular/core';
import { CalendarEvent } from '../../models/calendar-event';

@Pipe({name: 'groupBy'})
export class GroupByPipe implements PipeTransform {

  transform(value: Array<any>, field: string): Array<any> {
    const groupedObj = value.reduce((prev, cur) => {
      if (!prev[cur[field]]) {
        prev[cur[field]] = [cur];
      } else {
        prev[cur[field]].push(cur);
      }
      return prev;
    }, {});
    return Object.keys(groupedObj).map(key => ({ key, value: groupedObj[key] })).sort(
      ( a: any, b: any ) => {
        if ( a.key < b.key ) {
          return -1;
        } else if (a.key > b.key) {
          return 1;
        } else {
          return 0;
        }
      }
    );
  }

  private extractOnlyDate( date: number ): number {
    const yearValue = new Date(date).getFullYear();
    const monthValue = new Date(date).getMonth();
    const dateValue = new Date(date).getDate();

    return new Date(yearValue, monthValue, dateValue).getTime();
  }
}
