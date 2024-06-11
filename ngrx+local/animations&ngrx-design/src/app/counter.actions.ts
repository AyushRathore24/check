import { createAction, props } from '@ngrx/store';

// export const increment = createAction('[MyComponent Component] Increment');
// export const decrement = createAction('[MyComponent Component] Decrement');
// export const reset = createAction('[MyComponent Component] Reset');


export const increment = createAction('1',props<{
    value:number}>()
);
export const decrement = createAction('10');
export const reset = createAction('2')
export const multiply = createAction('54',props<{multiplier:number}>())
export const init =createAction("Init")
export const set =createAction("set",props<{value:number}>())