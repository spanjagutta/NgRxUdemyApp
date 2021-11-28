import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppState } from '../reducers';
import { isLoggedIn, isLoggedOut } from './auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private store: Store<AppState>, private router: Router) { }

  canActivate(): Observable<boolean> {
      return this.store.pipe(
        select(isLoggedIn),
        tap(loggedIn => {
          if(!loggedIn){
            this.router.navigateByUrl('/login');
          }
        })
      );
  }
  
}
