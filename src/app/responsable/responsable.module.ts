import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsablesComponent } from './responsables/responsables.component';
import { CrearResponsableComponent } from './crear-responsable/crear-responsable.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { ResponsableService } from './responsable.service';
import { SectorNamePipe } from '../pipes/sector-name/sector-name.pipe';
import { ListaResponsablesComponent } from './lista-responsables/lista-responsables.component';
import { AccionResponsableComponent } from './accion-responsable/accion-responsable.component';

@NgModule({
  declarations: [
    ResponsablesComponent,
    CrearResponsableComponent,
    SectorNamePipe,
    ListaResponsablesComponent,
    AccionResponsableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
  ],
  providers: [ResponsableService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ResponsableModule {}
