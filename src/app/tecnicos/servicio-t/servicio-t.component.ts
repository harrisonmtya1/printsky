import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firestore.service';

interface Servicio{
  fechaReporte:Date,
  cliente:string,
  refImpresora:string,
  dano:string,
  tecnico?:string
}



@Component({
  selector: 'app-servicio-t',
  templateUrl: './servicio-t.component.html',
  styleUrls: ['./servicio-t.component.css']
})



export class ServicioTComponent implements OnInit{
  
  servicios: any[]=[];

  constructor(private fs:FirestoreService ){
     
  }

  ngOnInit(): void {
    this.cargarServicios()
  }

 

  async cargarServicios(){
    
   const datos=await this.fs.leerServicios()
   this.servicios=datos.docs
   
   
  }



}
