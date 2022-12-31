import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';

import { DropdwonService } from './services/dropdwon.service';

@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent,
  ],
  providers: [DropdwonService],
})
export class SharedModule {}
