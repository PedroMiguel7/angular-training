import { AbstractControl, FormArray } from '@angular/forms';

export class FormValidations {
  static requiredMinCheckBox(min = 1) {
    const validator = (formArray: AbstractControl) => {
      if (formArray instanceof FormArray) {
        const totalChecked = formArray.controls
          .map((v) => v.value)
          .reduce(
            (total: number, atual: number) => (atual ? total + atual : total),
            0
          );
        return totalChecked >= min ? null : { required: true };
      }
      throw new Error('formArray is not an instance of FormArray');
    };
    return validator;
  }
}
