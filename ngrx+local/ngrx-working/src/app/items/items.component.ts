// src/app/items/items.component.ts
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Item } from '../item.model';
import { loadItems } from '../items.actions';
import { selectAllItems, selectItemsLoading, selectItemsError } from '../items.selectors';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items$!: Observable<Item[]>;
  loading$!: Observable<boolean>;
  error$!: Observable<any>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadItems());
    this.items$ = this.store.pipe(select(selectAllItems));
    this.loading$ = this.store.pipe(select(selectItemsLoading));
    this.error$ = this.store.pipe(select(selectItemsError));
  }
}
