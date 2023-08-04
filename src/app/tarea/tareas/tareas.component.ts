import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from 'src/model/tarea.model';
import { MatDialog } from '@angular/material/dialog';
import { TareaDialogComponent } from './tarea-dialog/tarea-dialog.component';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.sass'],
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];
  isAdmin!: boolean;

  constructor(
    public tareaService: TareaService,
    public dialog: MatDialog,
    public loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.tareas = this.tareaService.tareas;
    this.loginService._usuarioEncontrado.subscribe((data) => {
      if (data?.rol === 'administrador') {
        this.isAdmin = true;
      }
    });
  }

  openDialog(tarea: Tarea) {
    this.dialog.open(TareaDialogComponent, {
      data: { tarea },
    });
  }

  eliminar(tarea: Tarea) {
    this.tareaService.eliminarTarea(tarea);
  }
}
