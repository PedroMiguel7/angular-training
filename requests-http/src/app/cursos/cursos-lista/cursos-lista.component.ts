import { Component, OnInit, ViewChild } from '@angular/core';
import { catchError, empty, Observable, Subject } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {
  // cursos?: Curso[];

  cursos$?: Observable<Curso[]>;
  error$?: any = new Subject<Boolean>();
  bsModalRef!: BsModalRef;

  cursoSelecionado!: Curso;

  deleteModalRef!: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  constructor(
    private service: CursosService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    // this.service.list().subscribe((dados: Curso[]) => (this.cursos = dados));
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list().pipe(
      catchError((error: any) => {
        this.handleError();
        console.log(error);
        this.error$.next(true);
        return empty();
      })
    );
  }

  handleError() {
    this.alertService.showAlertDanger(
      'Erro ao carregar cursos. Tente novamente mais tarde.'
    );
  }

  onEdit(curso: number) {
    this.router.navigate(['editar/', curso], { relativeTo: this.route });
  }

  onDelete(curso: Curso) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, {
      class: 'modal-sm',
    });
  }

  OnConfirmDelete(): void {
    this.service.remover(this.cursoSelecionado?.id).subscribe(
      (succes) => {
        this.onRefresh(), this.deleteModalRef?.hide();
      },
      (error) => {
        this.alertService.showAlertDanger(
          'Erro ao remover curso. Tente novamente mais tarde.'
        ),
          this.deleteModalRef?.hide();
      }
    );
  }

  OnDeclineDelete(): void {
    this.deleteModalRef?.hide();
  }
}
