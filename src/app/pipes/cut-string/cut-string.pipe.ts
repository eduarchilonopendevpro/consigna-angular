import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutString',
})
export class CutStringPipe implements PipeTransform {
  transform(value: string, count: number): string {
    value = value.substring(0, count) + '...';
    return value;
  }
}
