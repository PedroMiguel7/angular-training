import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DropdwonService {
  constructor(private http: HttpClient) {}

  getEstadosBr() {
    return this.http.get('../../../assets/estadosBr.json').pipe();
  }

  getCargos() {
    return [
      { nome: 'Dev', nivel: 'Junior', desc: 'Dev Jr' },
      { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' },
      { nome: 'Dev', nivel: 'Senior', desc: 'Dev Sr' },
    ];
  }

  getTecnologias() {
    return [
      { nome: 'java', desc: 'java' },
      { nome: 'javascript', desc: 'javascript' },
      { nome: 'php', desc: 'php' },
      { nome: 'ruby', desc: 'ruby' },
    ];
  }

  getNewslettter() {
    return [
      { valor: 's', desc: 'Sim' },
      { valor: 'n', desc: 'Não' },
    ];
  }
}
