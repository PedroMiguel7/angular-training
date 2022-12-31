import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EstadoBr } from '../shared/models/estado-br';
import { DropdwonService } from '../shared/services/dropdwon.service';
import { Observable, map } from 'rxjs';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { FormValidations } from '../shared/form-validations';
import { VerificaEmailService } from './services/verifica-email.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss'],
})
export class DataFormComponent implements OnInit {
  formulario!: FormGroup;
  estados: EstadoBr[] = [];
  // estados!: Observable<EstadoBr[]>;
  cargos: any[] = [];
  tecnologias: any[] = [];
  newsletterOp: any[] = [];

  frameworks = ['Angular', 'React', 'Vue', 'Sencha'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private dropDownService: DropdwonService,
    private cepService: ConsultaCepService,
    private verificaEmailService: VerificaEmailService
  ) {}

  ngOnInit(): void {
    // this.verificaEmailService
    //   .verificarEmail('email@email.com')
    //   .subscribe((data: any) => console.log(data));

    this.formulario = this.formBuilder.group({
      nome: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      email: [
        null,
        [Validators.required, Validators.email],
        [this.validarEmail.bind(this)],
      ],
      confirmarEmail: [
        null,
        [
          Validators.required,
          Validators.email,
          FormValidations.equalsTo('email'),
        ],
      ],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, Validators.pattern(/^[0-9]{8}$/)]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      }),
      cargo: [null],
      tecnologias: [null],
      newsLetter: ['s'],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks(),
    });

    this.dropDownService.getEstadosBr().subscribe((res: any) => {
      res.map((dados: any) => {
        this.estados.push(dados);
      });
    });

    this.cargos = this.dropDownService?.getCargos();
    this.tecnologias = this.dropDownService?.getTecnologias();
    this.newsletterOp = this.dropDownService?.getNewslettter();
  }

  buildFrameworks() {
    const values = this.frameworks.map((v) => new FormControl(false));

    return this.formBuilder.array(
      values,
      FormValidations.requiredMinCheckBox(1)
    );
  }

  onSubmit() {
    let valueSubmit = Object.assign({}, this.formulario.value);

    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((v: any, i: number) => (v ? this.frameworks[i] : null))
        .filter((v: any) => v !== null),
    });

    if (this.formulario.valid) {
      this.http
        .post('http://httpbin.org/post', JSON.stringify(valueSubmit))
        .subscribe(
          (res) => {
            this.resetar();
          },
          (error: any) => alert('erro')
        );
    } else {
      this.verificaValidacoesForm(this.formulario);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((campo) => {
      const controle = formGroup.get(campo);
      controle?.markAsTouched();

      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
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

  consultaCEP() {
    let cep = this.formulario.get('endereco.cep')?.value;

    this.cepService.consultaCEP(cep)?.subscribe((dados: any) => {
      this.populaDadosForm(dados, this.formulario);
    });
  }

  resetDadosForm() {
    this.formulario.patchValue({
      endereco: {
        cep: null,
        complemento: null,
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
      },
    });
  }

  populaDadosForm(dados: any, formulario: any) {
    formulario.patchValue({
      endereco: {
        // cep: formulario.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });

    this.formulario.get('nome')?.setValue('Pedro');
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.formulario.get('cargo')?.setValue(cargo);
  }

  compararCargos(
    obj1: { nome: any; nivel: any },
    obj2: { nome: any; nivel: any }
  ) {
    return obj1 && obj2
      ? obj1.nome === obj2.nome && obj1.nivel === obj2.nivel
      : obj1 === obj2;
  }

  setarTecnologias() {
    this.formulario.get('tecnologias')?.setValue(['java', 'php', 'javascript']);
  }

  getFrameworksControls() {
    return this.formulario.get('frameworks')
      ? (<FormArray>this.formulario.get('frameworks')).controls
      : null;
  }

  validarEmail(formControl: FormControl) {
    return this.verificaEmailService
      .verificarEmail(formControl.value)
      .pipe(
        map((emailExiste: any) =>
          emailExiste ? { emailInvaldio: true } : null
        )
      );
  }
}
