import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ItemsState } from './items.reducer';

// Select the items state slice
export const selectItemsState = createFeatureSelector<ItemsState>('items');

// Select the items array
export const selectAllItems = createSelector(
  selectItemsState,
  (state: ItemsState) => state.items
);

// Select the loading state
export const selectItemsLoading = createSelector(
  selectItemsState,
  (state: ItemsState) => state.loading
);

// Select the error state
export const selectItemsError = createSelector(
  selectItemsState,
  (state: ItemsState) => state.error
);