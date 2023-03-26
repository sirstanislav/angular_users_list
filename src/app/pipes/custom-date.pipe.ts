import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string | null {
    return new DatePipe('en-US').transform(value, ...args);
  }
}
