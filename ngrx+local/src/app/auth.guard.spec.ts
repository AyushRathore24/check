import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

import { AuthService } from './auth.service';
      import {  ReactiveFormsModule } from '@angular/forms';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { postReducer } from './post.reducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './post.effects';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FirestoreModule,
      
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideFirestore(() => getFirestore()),
        StoreModule.forRoot({ posts: postReducer }),
        EffectsModule.forRoot([PostEffects]),
    
     ],
      providers: [AuthService],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
