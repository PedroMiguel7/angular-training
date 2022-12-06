import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.scss'],
})
export class DiretivaNgforComponent {
  cursos: string[] = ['Angular 2', 'JavaScript', 'Typescript'];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
