import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicoComponent } from './tecnicos/tecnico/tecnico.component';
import { ServicioTComponent } from './tecnicos/servicio-t/servicio-t.component';
import { LoginComponent } from './login/login/login.component';



const routes: Routes = [
  {   path:'tecnico', component: TecnicoComponent  },
  { path:'tecnico/servicio', component: ServicioTComponent},
  { path:'', component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
