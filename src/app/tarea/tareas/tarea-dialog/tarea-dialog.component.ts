import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Tarea } from 'src/model/tarea.model';

@Component({
  selector: 'app-tarea-dialog',
  templateUrl: './tarea-dialog.component.html',
  styleUrls: ['./tarea-dialog.component.sass'],
})
export class TareaDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { tarea: Tarea }) {}
}
