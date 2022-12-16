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

  livros: string[] = ['angular', 'Java'];

  filtroo: string = '';

  addCurso(valor: string) {
    this.livros.push(valor);
    console.log(this.livros);
  }

  obterCursos() {
    if (
      this.livros.length == 0 ||
      this.filtroo === undefined ||
      this.filtroo.trim() === ''
    ) {
      return this.livro;
    }
    return this.livros.filter((v) => {
      if (v.toLowerCase().indexOf(this.filtroo.toLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }
}
