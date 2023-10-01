import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicoComponent } from './tecnicos/tecnico/tecnico.component';
import { ServicioTComponent } from './tecnicos/servicio-t/servicio-t.component';
import { LoginComponent } from './login/login/login.component';
import { AdministradorComponent } from './administradores/administrador/administrador.component';
import { ServicioAComponent } from './administradores/servicio-a/servicio-a.component';



const routes: Routes = [
  { path: 'tecnico', component: TecnicoComponent },
  { path: 'tecnico/servicio', component: ServicioTComponent },
  { path: '', component: LoginComponent },
  { path: 'administrador', component: AdministradorComponent},
  { path: 'administrador/servicio', component: ServicioAComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
