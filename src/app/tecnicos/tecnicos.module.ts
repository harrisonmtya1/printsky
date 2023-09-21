import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecnicoComponent } from './tecnico/tecnico.component';
import { ServicioTComponent } from './servicio-t/servicio-t.component';



@NgModule({
  declarations: [
    TecnicoComponent,
    ServicioTComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TecnicosModule { }
