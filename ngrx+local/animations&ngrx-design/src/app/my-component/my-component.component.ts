import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, count } from 'rxjs';
import { increment, decrement, reset, multiply } from '../counter.actions';
import { selectBigCount } from '../counter.selectors';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent  {
  count: Observable<number>;

  constructor(private store: Store<{ count2: number }>) {
    this.count= store.select('count2');
  }
  

  increment() {
    this.store.dispatch(increment({value:3}));
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
  multiply(multiplier: number) {
    this.store.dispatch(multiply({ multiplier }));
  }
}
