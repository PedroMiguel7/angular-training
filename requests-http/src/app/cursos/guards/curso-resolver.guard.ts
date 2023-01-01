import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { CursosService } from '../cursos.service';
import { Curso } from './../curso';

@Injectable({
  providedIn: 'root',
})
export class CursoResolverGuard implements Resolve<Curso> {
  constructor(private cursosService: CursosService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Curso | Observable<Curso> | Promise<Curso> | Observable<any> {
    if (route.params && route.params['id']) {
      return this.cursosService.loadByID(route.params['id']);
    }

    return of({
      id: null,
      nome: null,
    });
  }
}
