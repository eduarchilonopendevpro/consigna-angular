import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toLocaleDate',
})
export class ToLocaleDatePipe implements PipeTransform {
  transform(value: Date): string {
    return value.toLocaleDateString();
  }
}
