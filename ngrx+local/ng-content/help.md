<!-- import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent
  ],n
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ], -->



_____________________________________
  <ag-grid-angular 
      style="width: 500px; height: 500px;"
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
    ></ag-grid-angular>


// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ag-grid-angular
      class="ag-theme-alpine"
      [rowData]="rowData"
      [columnDefs]="columnDefs"
    ></ag-grid-angular>
  `,
  styles: [
    `
      .ag-theme-alpine {
    height:30vh;
    width:35vw;
        border: 1px solid #ccc;
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
    `,
  ],
})
export class AppComponent {
  columnDefs :any= [
    { headerName: 'Column 1', field: 'col1' },
    { headerName: 'Column 2', field: 'col2' },
    { headerName: 'Column 3', field: 'col3' },
  ];

  rowData = [
    { col1: 'Row 1 - Col 1', col2: 'Row 1 - Col 2', col3: 'Row 1 - Col 3' },
    { col1: 'Row 2 - Col 1', col2: 'Row 2 - Col 2', col3: 'Row 2 - Col 3' },
  ];
}
