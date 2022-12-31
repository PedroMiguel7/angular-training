import { Component, Input, forwardRef } from '@angular/core';
import {
  FormControl,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFieldComponent),
  multi: true,
};

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [INPUT_FIELD_VALUE_ACCESSOR],
})
export class InputFieldComponent implements ControlValueAccessor {
  @Input() fieldValidationFunction: any;

  @Input() id!: string;

  @Input() label!: string;

  @Input() type = 'text';

  @Input() control?: any;

  @Input() isReadOnly = false;

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue(v: any): void {
    this.value = v;
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isReadOnly = isDisabled;
  }

  capitalize(fieldName: string): string {
    return fieldName.substr(0, 1).toUpperCase() + fieldName.substr(1);
  }
}
