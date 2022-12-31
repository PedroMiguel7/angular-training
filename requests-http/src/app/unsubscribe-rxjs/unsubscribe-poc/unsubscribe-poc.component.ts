import { Component, OnInit } from '@angular/core';
import { EnviarValorService } from '../enviar-valor.service';

@Component({
  selector: 'app-unsubscribe-poc',
  templateUrl: './unsubscribe-poc.component.html',
  styleUrls: ['./unsubscribe-poc.component.scss'],
})
export class UnsubscribePocComponent implements OnInit {
  mostrarComponentes = true;

  constructor(private serviceE: EnviarValorService) {}

  ngOnInit() {}

  emitirValor(valor: string) {
    this.serviceE.emitirValor(valor);
  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}