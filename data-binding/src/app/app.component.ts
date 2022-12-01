import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  valor: number = 5;

  deletarCliclo: boolean = false;

  mudaValor() {
    this.valor = this.valor + Math.random();
  }

  destruirCiclo() {
    this.deletarCliclo = true;
  }
}
