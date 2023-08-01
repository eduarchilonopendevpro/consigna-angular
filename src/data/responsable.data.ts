import { generateCustomId } from 'src/app/utils/generateId.util';
import { Responsable } from 'src/model/responsable.model';

export const responsables: Responsable[] = [
  {
    nombre: 'Juan',
    apellido: 'Pérez',
    sector: 1,
    id: generateCustomId(),
  },
  {
    nombre: 'María',
    apellido: 'Gómez',
    sector: 2,
    id: generateCustomId(),
  },
  {
    nombre: 'Carlos',
    apellido: 'López',
    sector: 3,
    id: generateCustomId(),
  },
];
