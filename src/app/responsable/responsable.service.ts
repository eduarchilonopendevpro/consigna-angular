import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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

  get cantidadResponsables(): Observable<number> {
    return of(this.listaResponsables.length);
  }

  findResponsable(responsableId: string): Responsable | any {
    return this.listaResponsables.find(
      (responsable) => responsable.id === responsableId
    );
  }

  crearResponsable(responsable: Responsable): void {
    this.responsables.push(responsable);
  }

  eliminar(res: Responsable): void {
    this.responsables = this.listaResponsables.filter((r) => r.id !== res.id);
  }

  modificarResponsable(responsable: Responsable) {
    this.responsables.forEach((res) => {
      if (res.id === responsable.id) {
        res.id = responsable.id;
        res.nombre = responsable.nombre;
        res.apellido = responsable.apellido;
        res.sector = responsable.sector;
      }
    });
  }
}
