import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.scss'],
  // outputs: ['mudouValor'],
})
export class OutputPropertyComponent {
  @Input() valor: number = 0;

  @Output() mudouValor = new EventEmitter();

  incrementa() {
    this.valor++;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  decrementa() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
