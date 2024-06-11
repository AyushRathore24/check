// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { itemsReducer } from './items.reducer';
import { ItemsEffects } from './items.effects';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ items: itemsReducer }),
    EffectsModule.forRoot([ItemsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
