import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false,
})
export class FiltroArrayImpuroPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args.toLocaleString().toLowerCase();
    return value.filter(
      (v: any) => v.toLocaleString().toLowerCase().indexOf(filter) != -1
    );

    return null;
  }
}
