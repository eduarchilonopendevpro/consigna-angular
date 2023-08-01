import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsablesComponent } from './responsables/responsables.component';
import { CrearResponsableComponent } from './crear-responsable/crear-responsable.component';



@NgModule({
  declarations: [
    ResponsablesComponent,
    CrearResponsableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResponsableModule { }
