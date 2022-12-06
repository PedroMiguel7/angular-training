import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss'],
})
export class DiretivaNgifComponent {
  cursos: string[] = ['Angular'];

  mostrarCursos = false;

  BrincksMinha = 'mostrar ';

  OnmostrarCursos() {
    this.mostrarCursos = !this.mostrarCursos;
    this.BrincksMinha = this.mostrarCursos ? 'esconder ' : 'mostrar ';
  }
}
