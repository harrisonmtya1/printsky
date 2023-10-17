import { Injectable } from '@angular/core';
import {getFirestore} from 'firebase/firestore';
import app from '../../main'
import { collection, getDocs } from 'firebase/firestore';
import { JsonPipe } from '@angular/common';

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

  

 
}
