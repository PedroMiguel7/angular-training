import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CursosListaComponent],

  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class CursosModule {}
