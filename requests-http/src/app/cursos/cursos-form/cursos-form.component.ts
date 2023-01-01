import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
  preserveWhitespaces: true,
})
export class CursosFormComponent implements OnInit {
  formulario!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private cursosService: CursosService,
    private modal: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: any) => {
    //   const id = params['id'];
    //   const curso$ = this.cursosService.loadByID(id);
    //   curso$.subscribe((curso: any) => {
    //     this.updateForm(curso);
    //   });
    //; });

    // this.route.params
    //   .pipe(
    //     map((params: any) => params['id']),
    //     switchMap((id: any) => this.cursosService.loadByID(Number(id)))
    //     // switchMap(cursos => obterAulas)
    //   )
    //   .subscribe((curso: any) => this.updateForm(curso));

    // concatMap => a ordem da requisição importa
    // mergeMap => a ordem não importa
    // exHaustMap => casos de login

    const curso = this.route.snapshot.data['Curso'];
    console.log(
      '🚀 ~ file: cursos-form.component.ts:50 ~ CursosFormComponent ~ ngOnInit ~ curso',
      curso
    );

    this.formulario = this.fb.group({
      id: [curso?.id],
      nome: [
        curso?.nome,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  // updateForm(curso: any) {
  //   this.formulario.patchValue({
  //     id: curso.id,
  //     nome: curso.nome,
  //   });
  // }

  hasError(field: string) {
    return this.formulario.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formulario.valid) {
      let msgSucess = 'Curso criado com suceso.';
      let msgError = 'Erro ao criar curso, tente novamente.';

      if (this.formulario.value.id) {
        msgSucess = 'Curso editado com suceso.';
        msgError = 'Erro ao atualizar curso, tente novamente.';
      }

      this.cursosService.save(this.formulario.value).subscribe(
        (success: any) => {
          this.modal.showAlertSucesso(msgSucess), this.location.back();
        },
        (error: any) => this.modal.showAlertDanger(msgError)
      );

      // if (this.formulario.value.id) {
      //   // update
      //   this.cursosService.save(this.formulario.value).subscribe(
      //     (success: any) => {
      //       this.modal.showAlertSucesso('Curso editado com suceso'),
      //         this.location.back();
      //     },
      //     (error: any) =>
      //       this.modal.showAlertDanger(
      //         'Erro ao atualizar curso, tente novamente'
      //       )
      //   );
      // } else {
      //   this.cursosService.save(this.formulario.value).subscribe(
      //     (success: any) => {
      //       this.modal.showAlertSucesso('Curso criado com suceso'),
      //         this.location.back();
      //     },
      //     (error: any) =>
      //       this.modal.showAlertDanger('Erro ao criar curso, tente novamente')
      //   );
      // }
    }
  }

  onCancel() {
    this.submitted = false;
    this.formulario.reset();
  }

  // haserrorNull(requerid: string) {
  //   return this.hasError('nome')![requerid] ? true : false;
  // }
}
