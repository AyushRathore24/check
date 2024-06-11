import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './item.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  getItems(): Observable<Item[]> {
    // Dummy data, replace this with your actual API call
    const items: Item[] = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' }
    ];
    return of(items);
  }
}