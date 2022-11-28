import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponente } from './meu-primeiro-componente/meu-primeiro-componente.component';
import { MeuSegundoComponentComponent } from './meu-segundo-component/meu-segundo-component.component';

@NgModule({
  declarations: [AppComponent, MeuPrimeiroComponente, MeuSegundoComponentComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
