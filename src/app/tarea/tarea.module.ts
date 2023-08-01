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
  ],
  providers: [TareaService],
})
export class TareaModule {}
