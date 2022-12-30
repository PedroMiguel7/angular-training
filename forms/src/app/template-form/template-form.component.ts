import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    // nome: 'Pedro',
    // email: 'pedro@gmail.com',
    nome: null,
    email: null,
  };

  onSubmit(formulario: any) {
    console.log(formulario);
    // console.log(this.usuario);

    this.http
      .post('http://httpbin.org/post', JSON.stringify(formulario.value))
      .subscribe((res) => {
        console.log(res);
        formulario.form.reset();
      });
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  verificaValidTouched(campo: any) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo: any) {
    return {
      'is-invalid': this.verificaValidTouched(campo),
    };
  }

  consultaCEP(cep: any, form: any) {
    Number(cep);
    if (cep != '') {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {
        this.resetDadosForm(form);
        this.http
          .get(`https://viacep.com.br/ws/${cep}/json`)
          .subscribe((dados: any) => this.populaDadosForm(dados, form));
      }
    }
  }

  populaDadosForm(dados: any, formulario: any) {
    formulario.form.patchValue({
      endereco: {
        cep: dados.cep,
        complemento: dados.complemento,
        rua: dados.logradouro,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf,
      },
    });
  }

  resetDadosForm(formulario: any) {
    formulario.form.patchValue({
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
}
