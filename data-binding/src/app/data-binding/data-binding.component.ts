import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  url: string = 'https://github.com/PedroMiguel7';

  cursolAngular: Boolean = true;
  urlImage: string =
    'https://media.tenor.com/XG8WXd4R7RYAAAAC/pato-caminando.gif';

  valorAtual: string = '';
  valorSalvo: string = '';

  isMouseOver: boolean = false;

  getValor() {
    return 1;
  }

  getCutritCurso() {
    return true;
  }

  botaoClick() {
    alert('clicado garai');
  }

  onKeyup(evento: Event) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: string) {
    this.valorSalvo = valor;
  }

  OnMouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }
}
