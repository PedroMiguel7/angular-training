import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'upload' },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./cursos/cursos.module').then((m) => m.CursosModule),
  },
  {
    path: 'rxjs-poc',
    loadChildren: () =>
      import('./unsubscribe-rxjs/unsubscribe-rxjs.module').then(
        (U) => U.UnsubscribeRxjsModule
      ),
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./upload-file/upload-file.module').then(
        (F) => F.UploadFileModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
