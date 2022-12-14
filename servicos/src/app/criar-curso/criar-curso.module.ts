import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component';

@NgModule({
  declarations: [CriarCursoComponent, ReceberCursoCriadoComponent],
  imports: [BrowserModule, AppRoutingModule],
  // providers: [CursosService],
  exports: [CriarCursoComponent],
})
export class CriarCursoModule {}
