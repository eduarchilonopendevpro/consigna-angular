import { Injectable } from '@angular/core';
import { responsables } from 'src/data/responsable.data';
import { Responsable } from 'src/model/responsable.model';

@Injectable({
  providedIn: 'root',
})
export class ResponsableService {
  responsables: Responsable[] = responsables;

  constructor() {}

  get listaResponsables(): Responsable[] {
    return this.responsables;
  }

  crearResponsable(responsable: Responsable): void {
    this.responsables.push(responsable);
  }

  eliminar(res: Responsable): void {
    this.responsables = this.listaResponsables.filter((r) => r.id !== res.id);
  }
}
