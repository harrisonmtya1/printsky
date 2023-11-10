import { Component, OnInit } from '@angular/core';
import { Auth, getAuth } from 'firebase/auth';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-tecnico',
  templateUrl: './tecnico.component.html',
  styleUrls: ['./tecnico.component.css']
})
export class TecnicoComponent implements OnInit {

  usuario: any
  auth:Auth;

  constructor(private us: UsuariosService, private router:Router ) {
      this.auth=getAuth();
  }

  ngOnInit() {
    this.usuario = this.us.usuarioLogueado
  }

  cerrarSesion() {
     this.auth.signOut().then(()=>{
      console.log('Sesion cerrada')
      this.router.navigate([''])
     }).catch((error)=>{
          console.error('Error al cerrar sesion', error)
     })

  }

}
