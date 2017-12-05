import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateWithOrdinal'
})
export class DateWithOrdinalPipe extends DatePipe implements PipeTransform {

  public transform(value: any, args?: string): string {
    const dayOfMonth: string = super.transform(value, 'd');
    const ordinal: string = this.ordinal(dayOfMonth);
    args = args.replace(/o/g, `\'${ordinal}\'`);
    return super.transform(value, args);
  }

  private ordinal(input: any): string {
    let n: number = input % 100;
    return n === 0 ? 'th' : (n < 11 || n > 13) ?
      ['st', 'nd', 'rd', 'th'][Math.min((n - 1) % 10, 3)] : 'th';
  }
}
