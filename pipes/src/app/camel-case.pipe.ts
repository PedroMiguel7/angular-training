import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase',
})
export class CamelCasePipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    let values = value.split(' ');
    let primeiraPalavra =
      values[0].charAt(0).toLowerCase() + values[0].substring(1).toLowerCase();
    let depoisDaPrimeiraPalavra = values.filter(
      (x: string, i: number) => i > 0
    );
    depoisDaPrimeiraPalavra = depoisDaPrimeiraPalavra
      .map(
        (x: string) => x.charAt(0).toUpperCase() + x.substring(1).toLowerCase()
      )
      .join('')
      .toString();
    return primeiraPalavra + depoisDaPrimeiraPalavra;
  }
}
