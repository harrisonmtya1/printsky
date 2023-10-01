import { Component } from '@angular/core';

interface Servicio{
  fechaReporte:Date,
  cliente:string,
  refImpresora:string,
  dano:string,
  tecnico?:string
}

@Component({
  selector: 'app-servicio-a',
  templateUrl: './servicio-a.component.html',
  styleUrls: ['./servicio-a.component.css']
})
export class ServicioAComponent {

  servicio:Servicio={
    fechaReporte: new Date(),
    cliente:"El colombiano",
    refImpresora:"Epson 3356",
    dano: "Atasco y ruido en bandeja 1",
    tecnico:"Harrison Montoya Valencia"    
  }


}
