import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, multiply, set } from './counter.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(increment, (state,action) => state + action.value),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0),
  on(multiply,(state,{multiplier}) => state * multiplier),
  on(set,(state,action) => action.value)
);