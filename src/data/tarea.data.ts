import { generateCustomId } from 'src/app/utils/generateId.util';
import { Tarea } from 'src/model/tarea.model';

export const tareas: Tarea[] = [
  {
    id: generateCustomId(),
    titulo: 'Tarea 1',
    responsable: 'Juan',
    descripcion:
      'Hacer informe Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo eum. Explicabo suscipit reprehenderit doloribus eaque, veniam fuga consequatur ullam ex, minima odit atque! Ex a ea animi nobis qui.',
    fechaYHora: new Date('2023-07-31T08:00:00'),
    estado: false,
  },
  {
    id: generateCustomId(),
    titulo: 'Tarea 2',
    responsable: 'María',
    descripcion:
      'Enviar correo Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo eum. Explicabo suscipit reprehenderit doloribus eaque, veniam fuga consequatur ullam ex, minima odit atque! Ex a ea animi nobis qui.',
    fechaYHora: new Date('2023-08-01T14:30:00'),
    estado: true,
  },
  {
    id: generateCustomId(),
    titulo: 'Tarea 3',
    responsable: 'Pedro',
    descripcion:
      'Preparar reunión Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo eum. Explicabo suscipit reprehenderit doloribus eaque, veniam fuga consequatur ullam ex, minima odit atque! Ex a ea animi nobis qui.',
    fechaYHora: new Date('2023-08-02T11:15:00'),
    estado: false,
  },
  {
    id: generateCustomId(),
    titulo: 'Tarea 4',
    responsable: 'Ana',
    descripcion:
      'Completar formulario Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo eum. Explicabo suscipit reprehenderit doloribus eaque, veniam fuga consequatur ullam ex, minima odit atque! Ex a ea animi nobis qui.',
    fechaYHora: new Date('2023-08-03T09:45:00'),
    estado: true,
  },
];
