import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador/administrador.component';
import { ServicioAComponent } from './servicio-a/servicio-a.component';
import { ServicioComponent } from './servicio/servicio.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdministradorComponent,
    ServicioAComponent,
    ServicioComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class AdministradoresModule { }
