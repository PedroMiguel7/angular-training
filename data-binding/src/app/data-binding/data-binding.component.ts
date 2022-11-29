import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  url: string = 'https://github.com/PedroMiguel7';

  cursolAngular: Boolean = true;

  getValor() {
    return 1;
  }

  getCutritCurso() {
    return true;
  }
}
