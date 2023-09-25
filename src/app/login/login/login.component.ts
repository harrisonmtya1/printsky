import { Component } from '@angular/core';
import { getAuth, signInWithEmailAndPassword, Auth } from 'firebase/auth';
import { Router } from '@angular/router';



interface Usuario {
  usuario: string
  clave: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent {

  auth:Auth;

  constructor(private router:Router){
    this.auth=getAuth()
  }


  usuario: Usuario = {
    usuario: "harrimv206@gmail.com",
    clave: "123456789"
  }

  login() {
    
    signInWithEmailAndPassword(this.auth, this.usuario.usuario, this.usuario.clave)
      .then((userCredential) => {
        const user = userCredential.user
        user.email=='harrimv206@gmail.com'? this.router.navigate(['/tecnico']):'';

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      })

  }





}

