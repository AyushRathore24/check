import { trigger , state , style, transition, animate  } from '@angular/animations';
import { Component  } from '@angular/core';
import { Store } from '@ngrx/store';
import { init } from './counter.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('divState',[
      state('normal',
      style({
        'background-color' : 'red',
        transform :'translateX(0)'
      })),
      state('highlighted',
      style({
        'background-color' : 'blue',
        transform :'translateX(200px)'
      })),
        transition('normal <=> highlighted',animate(600)),

    ]),
    trigger('wildState',[
      state('normal',
      style({
        'background-color' : 'skyblue',
        transform :'translateX(0) scale(1) '
      })),
      state('highlighted',
      style({
        'background-color' : 'blue',
        transform :'translateX(200px) scale(1) '
      })),
      state('shrunken',
      style({
        'background-color' : 'orange',
        transform :'translateX(100px) scale(0.8)'
      })),
      
        transition('normal <=> highlighted',animate(600)),
        transition('highlighted  <=>  normal',animate(800)),
        transition('shrunken <=> *',[
          style({
            'background-color':'green'
          }),
          animate(2000,style({
            borderRadius:'50px'
          })),
          animate(1500)
        ]
        )
    ]),
    trigger('list',[
      state('in',
      style({
        opacity:1,
        transform :'translateX(0)'
      })),
        transition('void => *',
        [
          style({
            opacity:0,
            transform:'translateX(-1000px)'
          }),
          animate(300),

        ])
        ])
        
        
        

 
  ]
})
export class AppComponent {
  title = 'demo4';
     state = 'normal';
     wildState = 'normal'
     onAnimate(){
     this.state == 'normal' ? this.state = 'highlighted' : this.state = 'normal';
     this.wildState='normal' ?  this.wildState = 'highlighted' : this.wildState = 'normal'     }
     
     onShrink(){
      console.log("aaaaaa");
      
      this.wildState = 'shrunken';
     }
   constructor(private store:Store){}

      ngOnInit():void{
        this.store.dispatch(init())
      }

}
