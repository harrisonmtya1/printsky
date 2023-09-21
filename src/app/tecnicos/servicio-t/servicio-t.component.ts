import { Component } from '@angular/core';

interface Servicio{
  fechaReporte:Date,
  cliente:string,
  refImpresora:string,
  dano:string
}

@Component({
  selector: 'app-servicio-t',
  templateUrl: './servicio-t.component.html',
  styleUrls: ['./servicio-t.component.css']
})



export class ServicioTComponent {

  servicio:Servicio={
    fechaReporte: new Date(),
    cliente:"El colombiano",
    refImpresora:"Epson 3356",
    dano: "Atasco y ruido en bandeja 1"    
  }

}
