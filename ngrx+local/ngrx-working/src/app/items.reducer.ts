// src/app/store/items.reducer.ts
import { createReducer, on } from '@ngrx/store';
import * as ItemsActions from './items.actions';
import { Item } from './item.model';

export interface ItemsState {
  items: Item[];
  loading: boolean;
  error: any;
}

export const initialState: ItemsState = {
  items: [],
  loading: false,
  error: null
};

export const itemsReducer = createReducer(
  initialState,

  on(ItemsActions.loadItems, state => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(ItemsActions.loadItemsSuccess, (state, { items }) => ({
    ...state,
    items,
    loading: false
  })),

  on(ItemsActions.loadItemsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);
