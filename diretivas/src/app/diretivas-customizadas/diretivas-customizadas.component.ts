import { Component } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.scss'],
})
export class DiretivasCustomizadasComponent {
  cursos: string[] = ['Angular'];

  mostrarCursos = false;

  BrincksMinha = 'mostrar ';

  OnmostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
    this.BrincksMinha = this.mostrarCursos ? 'esconder ' : 'mostrar ';
  }
}
