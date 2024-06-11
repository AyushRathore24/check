import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from 'express';
import { catchError, distinctUntilChanged, filter, forkJoin, from, interval, map, merge, of, pluck, retry, startWith, take, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 

export class AppComponent {
 input!: FormControl; 
userInput: string = ''; 

  constructor(public routes:Router){ 
    this.input=new FormControl('');
    }

getValue(val:string){
this.userInput=val;
}

}
