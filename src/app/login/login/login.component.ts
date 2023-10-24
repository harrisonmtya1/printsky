import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, Auth } from 'firebase/auth';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/servicios/usuarios.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  auth:Auth;

  constructor(private router:Router, private us:UsuariosService){
    this.auth=getAuth()
  }




  usuario: any={
    usuario:"",
    clave:""
  }


  login() {
    
    signInWithEmailAndPassword(this.auth, this.usuario.usuario, this.usuario.clave)
      .then((userCredential) => {
        const user = userCredential.user
        let usuario=this.us.consultarUsuario(user.email);
        console.log(usuario)
        usuario!.rol=='tecnico'? this.router.navigate(['/tecnico']):'';
        usuario!.rol=='administrador'? this.router.navigate(['/administrador']):'';

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })

  }

}

