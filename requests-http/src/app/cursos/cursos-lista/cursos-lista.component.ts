import { Component, OnInit } from '@angular/core';
import { catchError, empty, Observable, Subject } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {
  // cursos?: Curso[];

  cursos$?: Observable<Curso[]>;
  error$?: any = Subject<Boolean>;

  constructor(private service: CursosService) {}

  ngOnInit() {
    // this.service.list().subscribe((dados: Curso[]) => (this.cursos = dados));
    this.cursos$ = this.service.list().pipe(
      catchError((error: any) => {
        console.log(error);
        return empty();
      })
    );
  }
}
