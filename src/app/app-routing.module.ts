import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicoComponent } from './tecnicos/tecnico/tecnico.component';
import { LoginComponent } from './login/login/login.component';
import { AdministradorComponent } from './administradores/administrador/administrador.component';
import { ServicioAComponent } from './administradores/servicio-a/servicio-a.component';
import { ServicioComponent } from './administradores/servicio/servicio.component';



const routes: Routes = [
  { path: 'tecnico', component: TecnicoComponent },
  { path: '', component: LoginComponent },
  {
    path: 'administrador', component: AdministradorComponent,
    children: [
      { path: '', component: ServicioAComponent },
      { path: 'servicio', component: ServicioComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
