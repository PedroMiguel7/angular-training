import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Aluno } from './../alunos';
import { AlunosService } from './../alunos.service';

@Injectable({ providedIn: 'root' })
export class AlunoDetalheResolver implements Resolve<Aluno> {
  constructor(private alunosService: AlunosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Aluno> | Promise<Aluno> | Aluno {
    let id = route.params['id'];
    return this.alunosService.getAluno(Number(id));
  }
}
