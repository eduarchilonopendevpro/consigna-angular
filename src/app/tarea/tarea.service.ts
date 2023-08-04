import { Injectable, OnInit } from '@angular/core';
import { tareas } from 'src/data/tarea.data';
import { Tarea } from 'src/model/tarea.model';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root',
})
export class TareaService  {
  //cambiar a getter
  tareas: Tarea[] = tareas;
  isAdmin: boolean = false;

  constructor() {}

  crearTarea(tarea: Tarea) {
    tareas.push(tarea);
  }

  eliminarTarea(tarea: Tarea): Tarea[] {
    const index = tareas.findIndex((ta) => ta.id === tarea.id);
    return this.tareas.splice(index, 1);
  }

  modificarTarea(tarea: Tarea) {
    this.tareas.forEach((ta) => {
      if (ta.id === tarea.id) {
        ta.id = tarea.id;
        ta.titulo = tarea.titulo;
        ta.descripcion = tarea.descripcion;
        ta.fechaYHora = tarea.fechaYHora;
        ta.estado = tarea.estado;
        ta.responsable = tarea.responsable;
      }
    });
  }
}
