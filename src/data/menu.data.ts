import { Menu, MenuItem } from 'src/model/menu.model';

export const menuItems: MenuItem[] = [
  { nombre: 'Tareas', url: '' },
  { nombre: 'Crear tarea', url: 'crear-tarea' },
  { nombre: 'Responsables', url: 'responsables' },
  { nombre: 'Crear responsables', url: 'crear-responsable' },
];

export const menuList: Menu[] = [
  {
    nombre: 'Tarea',
    elementos: [
      { nombre: 'Lista', url: 'tareas' },
      { nombre: 'Crear', url: 'crear-tarea' },
    ],
  },
  {
    nombre: 'Responsable',
    elementos: [
      { nombre: 'Lista', url: 'responsables' },
      { nombre: 'Crear', url: 'crear-responsable' },
    ],
  },
];
