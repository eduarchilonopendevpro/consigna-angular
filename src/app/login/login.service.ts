import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { listaUsuarios } from 'src/data/usuario.data';
import { Responsable } from 'src/model/responsable.model';
import { Usuario } from 'src/model/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  usuarios!: Usuario[];
  _usuarioEncontrado = new BehaviorSubject<any>(null);
  user$ = this._usuarioEncontrado.asObservable();
  // usuarioEncontrado$!: Observable<Usuario>;
  usuario!: Usuario | any;

  get verListaUsuarios() {
    return (this.usuarios = listaUsuarios);
  }

  isAdmin: boolean = false;

  constructor(private router: Router) {}

  handleIsAdmin(usuario: Usuario): void {
    if (usuario.rol === 'administrador') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  login(email: String, password: String): void {
    this.usuario = listaUsuarios.find(
      (usuario) => usuario.email === email && usuario.password === password
    );
    this.handleIsAdmin(this.usuario?.rol);
    this._usuarioEncontrado.next(this.usuario);
  }
}
