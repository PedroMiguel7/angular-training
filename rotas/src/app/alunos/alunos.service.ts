import { Injectable } from '@angular/core';
import { Aluno } from './alunos';

@Injectable({
  providedIn: 'root',
})
export class AlunosService {
  private alunos: Aluno[] = [
    { id: 1, nome: 'Pedro', email: 'pedro@gmail.com' },
    { id: 2, nome: 'Miguel', email: 'miguel@gmail.com' },
    { id: 3, nome: 'Galdino', email: 'galdino@gmail.com' },
  ];

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number): Aluno | any {
    for (let i = 0; i < this.alunos.length; i++) {
      if (this.alunos[i].id === id) {
        return this.alunos[i];
      }
    }
    return null;
  }

  postAluno(aluno: { nome: string; email: string }) {
    let id = this.alunos[this.alunos.length - 1]?.id;
    let newAluno = { id: ++id, nome: aluno?.nome, email: aluno?.email };
    this.alunos.push(newAluno);
  }

  constructor() {}
}
