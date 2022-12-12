import { Directive } from '@angular/core';

@Directive({
  selector: '[appNgElse]',
})
export class NgElseDirective {
  cursos: string[] = ['Angular'];

  mostrarCursos = false;

  BrincksMinha = 'mostrar ';

  OnmostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
    this.BrincksMinha = this.mostrarCursos ? 'esconder ' : 'mostrar ';
  }
}
