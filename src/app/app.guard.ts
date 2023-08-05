import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';
import { Usuario } from 'src/model/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class AppGuard implements CanActivate {
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
    if (this.usuario) {
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
