import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursoResolverGuard } from './guards/curso-resolver.guard';

const routes: Routes = [
  { path: '', component: CursosListaComponent },
  {
    path: 'novo',
    component: CursosFormComponent,
    resolve: { Curso: CursoResolverGuard },
  },
  {
    path: 'editar/:id',
    component: CursosFormComponent,
    resolve: { Curso: CursoResolverGuard },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}
