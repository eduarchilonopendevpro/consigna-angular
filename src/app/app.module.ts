import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TareaModule } from './tarea/tarea.module';
import { CrearTareaModule } from './tarea/crear-tarea/crear-tarea.module';
import { ResponsableModule } from './responsable/responsable.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { ListaResponsablesComponent } from './responsable/lista-responsables/lista-responsables.component';
import { ResponsablesComponent } from './responsable/responsables/responsables.component';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [AppComponent, NavigationComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    TareaModule,

    ResponsableModule,
    MatExpansionModule,
    LoginModule,
  ],
  providers: [LoginService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
