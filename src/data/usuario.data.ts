import { generateCustomId } from 'src/app/utils/generateId.util';
import { Usuario } from 'src/model/usuario.model';

export const listaUsuarios: Usuario[] = [
  {
    id: generateCustomId(),
    nombre: 'Esteban Cruz',
    email: "user@mail.com",
    password: '123',
    rol: 'usuario',
  },
  {
    id: generateCustomId(),
    nombre: 'Ana Perez',
    email: "admin@mail.com",
    password: '1234',
    rol: 'administrador',
  },
];
