import { Injectable } from '@angular/core';

interface Usuario {
  usuario: string
  rol:string
  nombre:string
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor() { }

  
  usuarios: Usuario[] =[
    {
      usuario: "harrimv206@gmail.com",
      rol: "tecnico",
      nombre:"Harrison Montoya Valencia"
    },
    {
      usuario: "wasierra@correo.iue.edu.co",
      rol: "administrador",
      nombre:"Wilson Alejandro Sierra"
    }
  ]

  usuarioLogueado:Usuario={
    usuario:"",
    rol:"",
    nombre:""
  }

  consultarUsuario(nombreUsuario:string |null){
    let usuario=this.usuarios.find(usuario=>usuario.usuario==nombreUsuario)
    this.usuarioLogueado={
      usuario:usuario!.nombre,
      rol:usuario!.rol,
      nombre:usuario!.nombre
    }
    return this.usuarioLogueado
  }


}
