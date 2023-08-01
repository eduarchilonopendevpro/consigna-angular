import { Component, OnInit } from '@angular/core';
import { TareaService } from '../tarea.service';
import { Tarea } from 'src/model/tarea.model';
import { MatDialog } from '@angular/material/dialog';
import { TareaDialogComponent } from './tarea-dialog/tarea-dialog.component';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.sass'],
})
export class TareasComponent implements OnInit {
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.tareas = this.tareaService.tareas;
    console.log(this.tareas);
  }

  openDialog(tarea: Tarea) {
    this.dialog.open(TareaDialogComponent, {
      data: { tarea },
    });
  }
}
