import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TareaService } from '../tarea.service';
import { Tarea } from 'src/model/tarea.model';
import { Router } from '@angular/router';
import { Responsable } from 'src/model/responsable.model';
import { responsables } from 'src/data/responsable.data';
import { ResponsableService } from 'src/app/responsable/responsable.service';
import { generateCustomId } from 'src/app/utils/generateId.util';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.sass'],
})
export class CrearTareaComponent implements OnInit {
  formTarea: FormGroup = new FormGroup({
    titulo: new FormControl('', Validators.required),
    fechaYHora: new FormControl('', Validators.required),
    descripcion: new FormControl('', Validators.required),
    responsable: new FormControl('', Validators.required),
  });

  // formTarea!: FormGroup;

  responsables: Responsable[] = [];

  constructor(
    private fb: FormBuilder,
    private tareaService: TareaService,
    private responsableService: ResponsableService,
    private router: Router
  ) {}

  formInit() {
    this.formTarea = this.fb.group({
      titulo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.responsables = this.responsableService.responsables;
  }

  guardarTarea() {
    if (this.formTarea.invalid) {
      this.formTarea.markAllAsTouched();
    } else {
      const fechaYHora = new Date(this.formTarea?.value?.fechaYHora?._d);
      this.tareaService.crearTarea({
        ...this.formTarea?.value,
        fechaYHora: fechaYHora,
        id: generateCustomId(),
      });
      this.formTarea.reset();
      this.router.navigate(['']);
    }
  }
}
