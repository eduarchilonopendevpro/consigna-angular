import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocaleTime',
})
export class ToLocaleTimePipe implements PipeTransform {
  transform(value: Date): string {
    return value.toLocaleTimeString().slice(0, -3);
  }
}
