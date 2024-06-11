import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListComponent } from './post-list.component';

      import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirestoreModule, getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from 'src/app/post.effects';
import { postReducer } from 'src/app/post.reducer';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostListComponent ],
      imports: [
      ReactiveFormsModule,
      FirestoreModule,
      RouterLink,
      FormsModule,
    
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideFirestore(() => getFirestore()),
      StoreModule.forRoot({ posts: postReducer }),
      EffectsModule.forRoot([PostEffects]),
  
   ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
