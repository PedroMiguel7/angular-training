import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TemplateFormComponent } from './template-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [TemplateFormComponent],
  imports: [CommonModule, FormsModule, SharedModule, HttpClientModule],
})
export class TemplateFormModule {}
