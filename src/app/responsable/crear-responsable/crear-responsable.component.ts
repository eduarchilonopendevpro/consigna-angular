import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { sectores } from 'src/data/sector.data';
import { Sector } from 'src/model/sector.model';
import { ResponsableService } from '../responsable.service';
import { generateCustomId } from 'src/app/utils/generateId.util';

@Component({
  selector: 'app-crear-responsable',
  templateUrl: './crear-responsable.component.html',
  styleUrls: ['./crear-responsable.component.sass'],
})
export class CrearResponsableComponent {
  formResponsable: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    sector: new FormControl('', Validators.required),
  });

  sectores: Sector[] = sectores;

  constructor(private responsableService: ResponsableService) {}

  guardarResponsable() {
    if (this.formResponsable.invalid) {
      this.formResponsable.markAllAsTouched();
    } else {
      this.responsableService.crearResponsable({
        ...this.formResponsable.value,
        sector: Number(this.formResponsable.value?.sector),
        id: generateCustomId(),
      });
      this.formResponsable.reset();
    }
  }
}
