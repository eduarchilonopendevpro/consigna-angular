import { Pipe, PipeTransform } from '@angular/core';
import { sectores } from 'src/data/sector.data';

@Pipe({
  name: 'sectorName',
})
export class SectorNamePipe implements PipeTransform {
  transform(value: number): string | any {
    return sectores.find((sector) => sector.id === value)?.nombre;
  }
}
