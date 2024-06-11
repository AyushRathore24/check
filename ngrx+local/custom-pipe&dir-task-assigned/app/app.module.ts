import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertdatePipe } from './convertdate.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputDirective } from './input.directive';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ConvertdatePipe,
    InputDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule 
  ],
  providers: [ ConvertdatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
