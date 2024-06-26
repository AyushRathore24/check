
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';

import { environment } from 'src/environments/environment';
import { provideFirebaseApp,  initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, FirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { RouterLink } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { TempComponent } from './temp/temp.component';
import { SubAdminComponent } from './sub-admin/sub-admin.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { AuthService } from './auth.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BookngrxComponent } from './bookngrx/bookngrx.component';
import { postReducer } from './post.reducer';
import { PostEffects } from './post.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';

import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BooksComponent,
    HomeComponent,
    SearchComponent,
    TempComponent,
    SubAdminComponent,
    ForgetPasswordComponent,
    BookngrxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    FirestoreModule,
    BrowserAnimationsModule,
    RouterLink,
    FormsModule,
  
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    StoreModule.forRoot({ posts: postReducer }),
    EffectsModule.forRoot([PostEffects]),
    BrowserAnimationsModule,

 ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
