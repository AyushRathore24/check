import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';

import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { environment } from 'src/environments/environment';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import {
  getFirestore,
  provideFirestore,
  FirestoreModule,
  Firestore,
} from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';

import { Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { postReducer } from 'src/app/post.reducer';
import { PostEffects } from 'src/app/post.effects';
import { BookngrxComponent } from './bookngrx.component';
import { StoreModule } from '@ngrx/store/src';
import { AppRoutingModule } from '../app-routing.module';

describe('BookngrxComponent', () => {
  let component: BookngrxComponent;
  let fixture: ComponentFixture<BookngrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookngrxComponent ],
      // imports: [
      //   BrowserModule,
      //   AppRoutingModule,
      //   ReactiveFormsModule,
      //   FirestoreModule,
      //   FormBuilder,
      //   RouterLink,
      //   FormsModule,
      //   provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      //   provideFirestore(() => getFirestore()),
      //   StoreModule.forRoot({ posts: postReducer }),
      //   EffectsModule.forRoot([PostEffects]),
      // ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookngrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
