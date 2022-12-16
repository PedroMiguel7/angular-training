import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.scss'],
})
export class ExemplosPipesComponent {
  livro: any = {
    titulo: 'Learning JavaScript',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://loiane.training/continuar-curso/angular',
  };

  filtro: string = '';
  livros: string[] = ['angular', 'Java'];

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }
}
