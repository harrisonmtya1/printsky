import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit{
  
  usuario:any

  constructor(private us:UsuariosService){}
  
  ngOnInit(): void {
    this.usuario= this.us.usuarioLogueado
  }



}
