import { Injectable } from '@angular/core';
import { responsables } from 'src/data/responsable.data';
import { Responsable } from 'src/model/responsable.model';

@Injectable({
  providedIn: 'root',
})
export class ResponsableService {
  responsables: Responsable[] = responsables;

  constructor() {}
}
