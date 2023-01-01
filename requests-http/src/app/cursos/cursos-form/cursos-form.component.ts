import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CursosService } from '../cursos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

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
    private location: Location
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  hasError(field: string) {
    return this.formulario.get(field)?.errors;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formulario.valid) {
      this.cursosService.create(this.formulario.value).subscribe(
        (success: any) => {
          this.modal.showAlertSucesso('Curso criado com suceso'),
            this.location.back();
        },
        (error: any) =>
          this.modal.showAlertDanger('Erro ao criar curso, tente novamente')
      );
    }
  }

  onCancel() {
    this.submitted = false;
    this.formulario.reset();
  }
}
