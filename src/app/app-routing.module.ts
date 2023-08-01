import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from './tarea/crear-tarea/crear-tarea.component';
import { TareasComponent } from './tarea/tareas/tareas.component';
import { ResponsablesComponent } from './responsable/responsables/responsables.component';
import { CrearResponsableComponent } from './responsable/crear-responsable/crear-responsable.component';

const routes: Routes = [
  {
    path: '',
    component: TareasComponent,
  },
  {
    path: 'crear-tarea',
    component: CrearTareaComponent,
  },
  {
    path: 'responsables',
    component: ResponsablesComponent,
  },
  {
    path: 'crear-responsable',
    component: CrearResponsableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
