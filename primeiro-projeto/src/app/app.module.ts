import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CursosModule } from './cursos/cursos.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponente } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { MeuSegundoComponentComponent } from './meu-segundo-component/meu-segundo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MeuPrimeiroComponente,
    MeuSegundoComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CursosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
