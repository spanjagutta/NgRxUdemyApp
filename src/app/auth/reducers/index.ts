import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
import { User } from '../model/user.model';

export const initialAuthState: AuthState = {
  user: undefined
}

export interface AuthState {
  user: User
}

export const authReducer = createReducer(
  initialAuthState, 
  on(AuthActions.login, (state, action) => { 
    console.log("I am in login action in reducer");
    return { user: action.user}
  }),

  on(AuthActions.logout, (state, action) => {
    return { user: undefined }
  })  
  
  );

