import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
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
import { StoreModule } from '@ngrx/store/src';
import { AppRoutingModule } from '../app-routing.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      // imports: [
      //   BrowserModule,
      //   AppRoutingModule,
      //   ReactiveFormsModule,
      //   FirestoreModule,
      //   RouterLink,
      //   FormBuilder,
      //   FormsModule,
      //   provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      //   provideFirestore(() => getFirestore()),
      //   StoreModule.forRoot({ posts: postReducer }),
      //   EffectsModule.forRoot([PostEffects]),
      // ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
