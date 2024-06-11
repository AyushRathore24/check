// src/app/store/items.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ItemsActions from './items.actions';
import { ItemService } from './item.service';

@Injectable()
export class ItemsEffects {

  loadItems$ = createEffect(() => this.actions$.pipe(
    ofType(ItemsActions.loadItems),
    mergeMap(() => this.itemService.getItems()
      .pipe(
        map(items => ItemsActions.loadItemsSuccess({ items })),
        catchError(error => of(ItemsActions.loadItemsFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private itemService: ItemService
  ) {}
}
