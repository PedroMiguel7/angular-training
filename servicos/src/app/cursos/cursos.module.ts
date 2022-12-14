import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '../app-routing.module';
import { CursosService } from '../cursos/cursos.service';
import { CursosComponent } from './cursos.component';

@NgModule({
  declarations: [CursosComponent],
  imports: [BrowserModule, AppRoutingModule],
  // providers: [CursosService],
  exports: [CursosComponent],
})
export class CursosModule {}
