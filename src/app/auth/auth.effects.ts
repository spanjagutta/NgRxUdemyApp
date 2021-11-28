import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { AuthActions } from './action-types';



@Injectable()
export class AuthEffects {

  login$ = createEffect(() => 
  this.actions$
  .pipe(
    ofType(AuthActions.login),
    tap(action => {
      console.log("I am in login effect in Side Effects");      
      localStorage.setItem('user', JSON.stringify(action.user));
    })
  ), {dispatch: false});

  logout$ = createEffect(() => 
  this.actions$.pipe(
    ofType(AuthActions.logout),
    tap(action => {
      localStorage.removeItem('user');
      this.router.navigateByUrl('/login');
    })
  ), {dispatch: false});



  constructor(private actions$: Actions, private router: Router) {}

}
