import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    name: 'Pedro',
    email: 'pedro@gmail.com',
  };

  onSubmit(form: any) {
    console.log(form);
    console.log(this.usuario);
  }

  constructor() {}

  ngOnInit(): void {}
}
