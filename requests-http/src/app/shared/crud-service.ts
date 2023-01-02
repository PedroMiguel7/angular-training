import { HttpClient } from '@angular/common/http';
import { Inject } from '@angular/core';
import { delay, take, tap } from 'rxjs';

export class CrudService<T extends { id?: number }> {
  constructor(
    protected http: HttpClient,
    @Inject(String) private API_URL: string
  ) {}

  listar() {
    return this.http.get<T[]>(this.API_URL).pipe(delay(1000), tap(console.log));
  }

  loadById(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }

  private create(register: T) {
    return this.http.post(this.API_URL, register).pipe(take(1));
  }

  private update(register: T) {
    return this.http
      .put(`${this.API_URL}/${register.id}`, register)
      .pipe(take(1));
  }

  save(register: T) {
    if (register.id) {
      return this.update(register);
    } else {
      return this.create(register);
    }
  }

  remove(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1));
  }
}
