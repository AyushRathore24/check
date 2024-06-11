import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, init, multiply, reset, set } from "./counter.actions";
import { count, of, switchMap, tap, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCounterState } from "./counter.selectors";


@Injectable()
export class CounterEffects{

constructor(private actions$:Actions,private store:Store<{count2:number}>){}


  loadCount = createEffect(()  => 
  this.actions$.pipe(
    ofType(init),
    switchMap(() =>{
        const storedCounter = localStorage.getItem('count2');
        if(storedCounter){
            return of(set({value: +storedCounter}));

        }
        return of(set({value:0}))
    })
  ))







  saveCount = createEffect(() => this.actions$.pipe(
    ofType(increment,decrement,multiply,reset),
    withLatestFrom(this.store.select(selectCounterState)),
    tap(([action,count2])=>{
        console.log(action);
        localStorage.setItem('count2',count2.toString());
        
    })),
        { dispatch: false }

  )
}