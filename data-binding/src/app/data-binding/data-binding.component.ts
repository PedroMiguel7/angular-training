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

  getValor() {
    return 1;
  }

  getCutritCurso() {
    return true;
  }
}
