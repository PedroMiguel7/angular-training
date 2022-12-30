import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    // this.formulario = new FormGroup({
    //   nome: new FormControl(null),
    //   email: new FormControl(null),
    // });

    this.formulario = this.formBuilder.group({
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
    });
  }

  onSubmit() {
    console.log(this.formulario);
    // console.log(this.usuario);

    this.http
      .post('http://httpbin.org/post', JSON.stringify(this.formulario.value))
      .subscribe(
        (res) => {
          console.log(res);
          //reseta o form
          this.resetar();
        },
        (error: any) => alert('erro')
      );
  }

  resetar() {
    this.formulario.reset();
  }

  verificaValidTouched(campo: any) {
    return (
      !this.formulario.get(campo)?.valid && this.formulario.get(campo)?.touched
    );
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
    };
  }

  verificaEmailInvalido() {
    let campoEmail = this.formulario.get('endereco.email');
    if (campoEmail?.errors) {
      return campoEmail.errors['endereco.email'] && campoEmail.touched;
    }
  }
}
