import { Menu, MenuItem } from 'src/model/menu.model';

export const menuItems: MenuItem[] = [
  { nombre: 'Home', url: '' },
  { nombre: 'Tareas', url: 'tareas' },
  { nombre: 'Responsables', url: 'responsables' },
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
