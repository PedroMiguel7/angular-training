import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { CursosService } from '../cursos/cursos.service';
import { CriarCursoComponent } from './criar-curso.component';

@NgModule({
  declarations: [CriarCursoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CursosService],
  exports: [CriarCursoComponent],
})
export class CriarCursoModule {}
