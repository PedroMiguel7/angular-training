import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {
  cursos?: any;

  constructor(private service: CursosService) {}

  ngOnInit() {
    this.service.list().subscribe((dados: Curso[]) => (this.cursos = dados));
  }
}