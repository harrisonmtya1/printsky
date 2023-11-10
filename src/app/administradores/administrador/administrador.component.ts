import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Auth, getAuth} from 'firebase/auth';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit{
  
  usuario:any
  auth:Auth

  constructor(private us:UsuariosService, private router:Router){
    this.auth=getAuth();
  }
  
  ngOnInit(): void {
    this.usuario= this.us.usuarioLogueado
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
