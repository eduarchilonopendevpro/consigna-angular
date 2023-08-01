import { Injectable } from '@angular/core';
import { tareas } from 'src/data/tarea.data';
import { Tarea } from 'src/model/tarea.model';

@Injectable({
  providedIn: 'root',
})
export class TareaService {
  tareas: Tarea[] = tareas;
  
  constructor() {}

  crearTarea(tarea: Tarea) {
    const nueva = {
      titulo: 'Tarea 5',
      responsable: 'Jose',
      descripcion:
        'Hacer informe Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo eum. Explicabo suscipit reprehenderit doloribus eaque, veniam fuga consequatur ullam ex, minima odit atque! Ex a ea animi nobis qui.',
      fechaYHora: new Date('2023-07-31T08:00:00'),
      estado: false,
    };
    tareas.push(tarea);
  }
}
