import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador/administrador.component';
import { ServicioAComponent } from './servicio-a/servicio-a.component';



@NgModule({
  declarations: [
    AdministradorComponent,
    ServicioAComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdministradoresModule { }
