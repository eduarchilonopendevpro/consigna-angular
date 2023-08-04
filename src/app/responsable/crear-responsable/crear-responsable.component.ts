import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { sectores } from 'src/data/sector.data';
import { Sector } from 'src/model/sector.model';
import { ResponsableService } from '../responsable.service';
import { generateCustomId } from 'src/app/utils/generateId.util';
import { ActivatedRoute, Router } from '@angular/router';
import { Responsable } from 'src/model/responsable.model';

@Component({
  selector: 'app-crear-responsable',
  templateUrl: './crear-responsable.component.html',
  styleUrls: ['./crear-responsable.component.sass'],
})
export class CrearResponsableComponent implements OnInit {
  formResponsable: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    sector: new FormControl('', Validators.required),
  });

  sectores: Sector[] = sectores;

  editModo: boolean = false;
  responsable!: Responsable | any;
  responsableId!: string;

  constructor(
    private responsableService: ResponsableService,
    private router: Router,
    private fb: FormBuilder,
    private activateRoute: ActivatedRoute //permite acceder a los datos de la ruta
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe((param) => {
      const { id } = param;
      if (id === undefined) {
        this.editModo = false;
      } else {
        this.editModo = true;
        this.responsable = this.responsableService.findResponsable(id);
        this.cargarFormEditResponsable(this.responsable);
      }
    });
  }

  cargarFormEditResponsable(responsable: Responsable): void {
    this.formResponsable.patchValue({
      nombre: responsable?.nombre,
      apellido: responsable?.apellido,
      sector: responsable?.sector.toString(),
    });
  }

  modificarResponsable(responsable: Responsable): void {
    this.responsableService.modificarResponsable({
      ...responsable,
      sector: Number(responsable?.sector),
      id: this.responsable?.id,
    });
  }

  guardarResponsable() {
    if (this.formResponsable.invalid) {
      this.formResponsable.markAllAsTouched();
    } else {
      if (this.editModo) {
        this.modificarResponsable(this.formResponsable.value);
      } else {
        this.responsableService.crearResponsable({
          ...this.formResponsable.value,
          sector: Number(this.formResponsable.value?.sector),
          id: generateCustomId(),
        });
      }
      this.formResponsable.reset();
      this.router.navigate(['/responsables']);
    }
  }
}
