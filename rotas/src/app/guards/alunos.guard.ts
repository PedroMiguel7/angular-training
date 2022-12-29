import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('route: ' + route, 'state: ' + state);

    // if (state.url.includes('editar')) {
    //   alert('usuario sem acesso');
    //   return false;
    // }

    return true;
  }
}
