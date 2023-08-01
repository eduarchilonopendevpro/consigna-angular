import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearTareaComponent } from './crear-tarea.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMomentDatetimeModule } from '@mat-datetimepicker/moment';
import { MatDatetimepickerModule } from '@mat-datetimepicker/core';

@NgModule({
  declarations: [CrearTareaComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    // DemoMaterialModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMomentDateModule,

    MatMomentDatetimeModule,
    MatDatetimepickerModule,
  ],
  exports: [CrearTareaComponent],
})
export class CrearTareaModule {}
