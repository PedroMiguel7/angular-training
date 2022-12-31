import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

@NgModule({
  declarations: [CursosListaComponent],

  imports: [CommonModule, CursosRoutingModule, ReactiveFormsModule],
})
export class CursosModule {}
