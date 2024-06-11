import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookngrxComponent } from './bookngrx.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { postReducer } from '../post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from '../post.effects';
import { AuthService } from '../auth.service';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule, Title } from '@angular/platform-browser';
import { publishFacade } from '@angular/compiler';
describe('BookngrxComponent', () => {
  let component: BookngrxComponent;
  let fixture: ComponentFixture<BookngrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookngrxComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FirestoreModule,
        RouterLink,
        FormsModule,
      
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        StoreModule.forRoot({ posts: postReducer }),
        EffectsModule.forRoot([PostEffects]),
    
     ],
      providers: [AuthService],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookngrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // 4 unit test cases created for checking and testing

it('should render form when toshow is true', () => {
    component.toshow = true;
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('form')).toBeTruthy();
});
it('should not render form when toshow is false', () => {
  component.toshow = false;
  fixture.detectChanges();
  expect(fixture.nativeElement.querySelector('form')).toBeFalsy();
});

it('should initialize form with correct form controls', () => {
  expect(component.bookForm.get('title')).toBeTruthy();
  expect(component.bookForm.get('author')).toBeTruthy();
  expect(component.bookForm.get('publishedyear')).toBeTruthy();
  expect(component.bookForm.get('genre')).toBeTruthy();
});
it('should toggle boolean values correctly', () => {
  component.toshow = false;
  component.toggle();
  expect(component.toshow).toBe(true);
});
it('should have value as true',()=>{
  expect(component.toaddnewbook).toBe(true);
});
it('should contain a default value for bookform ',()=>{
  // expect(component.bookForm).toBeTruthy(); //is existing
  // expect(component.bookForm.value).toBe({id:'',title:'',publishedyear:'',author:'',genre:''});
  expect(component.bookForm.value).toEqual({id:'',title:'',publishedyear:'',author:'',genre:''});
  // expect(component.bookForm.value).toEqual({title:'',publishedyear:'',author:'',genre:''});
})




});
