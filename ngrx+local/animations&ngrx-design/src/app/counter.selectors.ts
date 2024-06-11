import { createSelector } from '@ngrx/store';

export const selectCounterState =  (state:{count2 : number}) => state.count2;

  export const selectBigCount = createSelector(
    selectCounterState,
    (state) => state *20
  )