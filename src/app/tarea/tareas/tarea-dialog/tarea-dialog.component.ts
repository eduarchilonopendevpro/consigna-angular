import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Tarea } from 'src/model/tarea.model';
import { TareaService } from '../../tarea.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Responsable } from 'src/model/responsable.model';
import { responsables } from 'src/data/responsable.data';
import { Estado } from 'src/model/estado.model';
import * as moment from 'moment';

@Component({
  selector: 'app-tarea-dialog',
  templateUrl: './tarea-dialog.component.html',
  styleUrls: ['./tarea-dialog.component.sass'],
})
export class TareaDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { tarea: Tarea },
    private tareaService: TareaService,
    public dialog: MatDialog
  ) {
    console.log(
      this.estados.find((est) => est.value === this.data.tarea.estado)
    );
  }

  estados: Estado[] = [
    {
      text: 'Compleado',
      value: true,
    },
    {
      text: 'Pendiente',
      value: false,
    },
  ];

  responsables: Responsable[] = responsables;

  showFormEdit: boolean = false;

  changeToFormEdit() {
    this.showFormEdit = !this.showFormEdit;
  }

  formEdit: FormGroup = new FormGroup({
    id: new FormControl(this.data.tarea.id),
    titulo: new FormControl(this.data.tarea.titulo),
    fechaYHora: new FormControl(new Date(this.data.tarea.fechaYHora)),
    descripcion: new FormControl(this.data.tarea.descripcion),
    responsable: new FormControl(this.data.tarea.responsable),
    estado: new FormControl(this.data.tarea.estado),
  });

  editar() {
    let fechaYHora: Date = new Date();
    if (moment.isMoment(this.formEdit?.value?.fechaYHora)) {
      fechaYHora = new Date(this.formEdit?.value?.fechaYHora?._d);
    } else {
      fechaYHora = this.formEdit?.value?.fechaYHora;
    }
    this.tareaService.modificarTarea({
      ...this.formEdit.value,
      fechaYHora: fechaYHora,
    });
    this.dialog.closeAll();
  }
}
