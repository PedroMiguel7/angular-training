import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.scss'],
})
export class AlunoFormComponent implements OnInit {
  aluno: any = {};
  inscricao: Subscription | undefined;
  private formMudou: boolean = false;

  PostAluno(aluno: { nome: string; email: string }) {
    this.alunosService.postAluno(aluno);
  }

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe((params: any) => {
      let id = params['id'];

      this.aluno = this.alunosService.getAluno(Number(id));

      if (this.aluno === null) {
        this.aluno = {};
      }
    });
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeMudarRota() {
    if (this.formMudou) {
      confirm('Tem certeza que deseja sair dessa página?');
    }

    return true;
  }

  // podeDesativar() {
  //   return this.podeMudarRota();
  // }
}
