import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/servicios/firestore.service';

interface Servicio{
 
    fechaReporte:Date,
    cliente:string,
    refImpresora:string,
    dano:string,
    estado:string,
    tecnico?:string
  
  
}

interface Tencico{
  nombre:string;
  documentoIdentidad:number;
}


@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})



export class ServicioComponent {
@ViewChild('servicioForm') servicioForm!: NgForm;

  constructor(private fs:FirestoreService, private route:Router){  }

 servicio:Servicio={
  fechaReporte:new Date(),
  cliente:"",
  refImpresora:"",
  dano:"",
  estado:"",
  tecnico:""
 }

 tecnicos:Tencico[]=[
  {nombre:"Harriso Montoya Valencia",documentoIdentidad:4245654},
  {nombre:"Pepido Perez", documentoIdentidad:4245655 }
 ]
  
  guardar(){
    this.fs.guardarServicio(this.servicio)
    this.resetFormulario()
    this.route.navigate(['/administrador'])
  }


  resetFormulario(){
    this.servicioForm.reset();
  }



}
