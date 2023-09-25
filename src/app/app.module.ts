import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { FormsModule } from '@angular/forms';
import { TecnicosModule } from './tecnicos/tecnicos.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TecnicosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
