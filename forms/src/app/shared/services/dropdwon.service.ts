import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdwonService {
  constructor(private http: HttpClient) {}

  getEstadosBr() {
    return this.http.get('../../../assets/estadosBr.json').pipe();
  }
}
