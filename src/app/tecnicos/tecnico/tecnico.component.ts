import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.css']
})
export class TecnicoComponent implements OnInit {

usuario:any

   constructor(private us:UsuariosService){

   }

   ngOnInit(){
     this.usuario=this.us.usuarioLogueado
   }

}
