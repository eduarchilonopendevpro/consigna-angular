import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Menu, MenuItem } from 'src/model/menu.model';
import { menuItems, menuList } from 'src/data/menu.data';
import { LoginService } from '../login/login.service';
import { Usuario } from 'src/model/usuario.model';
import { LoginGuard } from '../login/login.guard';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);

  menu: Menu[] = menuList;
  usuario!: Usuario;

  constructor(private loginService: LoginService, public lguard: LoginGuard) {}

  ngOnInit(): void {
    this.loginService._usuarioEncontrado.subscribe((data) => {
      this.usuario = data;
    });
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  title: string = 'Gestión de tareas';
}
