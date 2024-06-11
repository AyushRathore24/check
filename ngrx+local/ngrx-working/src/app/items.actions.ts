// src/app/store/items.actions.ts
import { createAction, props } from '@ngrx/store';
import { Item } from './item.model';


export const loadItems = createAction('[Item] Load Items');

export const loadItemsSuccess = createAction(
  '[Item] Load Items Success',
  props<{ items: Item[] }>()
);

export const loadItemsFailure = createAction(
  '[Item] Load Items Failure',
  props<{ error: any }>()
);
