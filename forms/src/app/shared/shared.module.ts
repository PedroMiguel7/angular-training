import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';

import { DropdwonService } from './services/dropdwon.service';
import { ErrorMsgComponent } from './error-msg/error-msg.component';

@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [FormDebugComponent, CampoControlErroComponent, ErrorMsgComponent],
  providers: [DropdwonService],
})
export class SharedModule {}
