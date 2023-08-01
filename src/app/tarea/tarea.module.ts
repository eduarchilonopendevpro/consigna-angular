import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareasComponent } from './tareas/tareas.component';
import { TareaService } from './tarea.service';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { TareaDialogComponent } from './tareas/tarea-dialog/tarea-dialog.component';
import { ToLocaleDatePipe } from '../pipes/to-locale-date/to-locale-date.pipe';
import { ToLocaleTimePipe } from '../pipes/to-locale-time/to-locale-time.pipe';
import { CutStringPipe } from '../pipes/cut-string/cut-string.pipe';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatMomentDatetimeModule } from '@mat-datetimepicker/moment';
import { MatDatetimepickerModule } from '@mat-datetimepicker/core';

@NgModule({
  declarations: [
    TareasComponent,
    TareaDialogComponent,
    ToLocaleDatePipe,
    ToLocaleTimePipe,
    CutStringPipe,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule, // DemoMaterialModule,
    MatDatepickerModule,
    MatDialogModule,
    MatMomentDatetimeModule,

    MatMomentDatetimeModule,
    MatDatetimepickerModule,
  ],
  providers: [TareaService],
})
export class TareaModule {}
