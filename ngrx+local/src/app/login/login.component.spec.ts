import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
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
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
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

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
