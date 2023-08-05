import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearTareaComponent } from './tarea/crear-tarea/crear-tarea.component';
import { TareasComponent } from './tarea/tareas/tareas.component';
import { ResponsablesComponent } from './responsable/responsables/responsables.component';
import { CrearResponsableComponent } from './responsable/crear-responsable/crear-responsable.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { AppGuard } from './app.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'tareas',
    component: TareasComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'crear-tarea',
    component: CrearTareaComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'responsables',
    component: ResponsablesComponent,
    canActivate: [AppGuard],
  },
  {
    path: 'crear-responsable',
    component: CrearResponsableComponent,
    canActivate: [LoginGuard],
  },
  {
    path: 'editar-responsable/:id',
    component: CrearResponsableComponent,
    canActivate: [LoginGuard],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
