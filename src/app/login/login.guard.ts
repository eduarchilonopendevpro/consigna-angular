import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { Usuario } from 'src/model/usuario.model';
import { Injectable } from '@angular/core';
import { LoginComponent } from './login.component';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  usuario!: Usuario;

  constructor(private ls: LoginService, private r: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    this.init();
    if (this.usuario && this.usuario.rol === 'administrador') {
      return true;
    } else {
      this.r.navigate(['']);
      return false;
    }
  }

  init() {
    this.ls._usuarioEncontrado.subscribe((data) => (this.usuario = data));
  }
}
