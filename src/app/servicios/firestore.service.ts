import { Injectable } from '@angular/core';
import {getFirestore} from 'firebase/firestore';
import app from '../../main'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { JsonPipe } from '@angular/common';

interface Servicio{
 
  fechaReporte:Date,
  cliente:string,
  refImpresora:string,
  dano:string,
  estado:string,
  tecnico?:string


}

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {

db=getFirestore(app)




  constructor() {
    
   }

  leerServicios=async()=>{
   const querySnapshot= await getDocs(collection(this.db,"servicios"))  
   return querySnapshot
  
  }

  guardarServicio= async(servicio:Servicio)=>{
    try {
      const docRef= await addDoc(collection(this.db,"servicios"),{
        cliente:servicio.cliente,
        dano:servicio.dano,
        equipo:servicio.refImpresora,
        estado:servicio.estado,
        fechaReporte:servicio.fechaReporte,
        tecnico:servicio.tecnico
       
      });
      console.log("Documento Guardado con ID: ", docRef.id)
    } catch (e) {
      console.error("Error guardando servicio",e)
    }
  }

  

 
}
