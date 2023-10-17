import { Component } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';

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

  constructor(private fs:FirestoreService){
    this.cargarServicios()
  }

  servicios:any[]=[]


  async cargarServicios(){
    const datos=await this.fs.leerServicios()
    this.servicios=datos.docs
  }


}
