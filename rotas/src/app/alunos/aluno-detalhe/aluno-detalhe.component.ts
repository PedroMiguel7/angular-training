import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { AlunosService } from '../alunos.service';
import { Aluno } from './../alunos';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.scss'],
})
export class AlunoDetalheComponent implements OnInit {
  aluno: Aluno | undefined;
  inscricao: Subscription | undefined;

  constructor(
    private alunosService: AlunosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe((params: any) => {
    //   let id = params['id'];

    //   this.aluno = this.alunosService.getAluno(Number(id));
    // });

    this.inscricao = this.route.data.subscribe((data: any) => {
      // console.log(data);
      this.aluno = data?.aluno;
    });
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno?.id, 'editar']);
  }

  ngOnDestroy(): void {
    this.inscricao?.unsubscribe();
  }
}
