// src/app/store/post.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
// import { PostService } from '../services/post.service';
import * as PostActions from './post.actions';
import { AuthService } from './auth.service';
import * as actions from './post.actions';
import {
  UpdatePost,
  UpdatePostSuccess,
  addPost,
  addPostSuccess,
  deletePost,
  deletePostSuccess,
  loadPosts,
  loadPostsSuccess,
  loginPost,
  signupPost,
  signupPostSuccess,
} from './post.actions';

@Injectable()
export class PostEffects {
  constructor(private actions$: Actions, private postService: AuthService) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadPosts),
      mergeMap(() =>
        this.postService
          .getBooks()
          .pipe(map((posts) => loadPostsSuccess({ posts })))
      )
    )
  );

  deletePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deletePost),
      mergeMap((action) => {
        return this.postService
          .deleteBookngrx(action.post)
          .pipe(map(() => deletePostSuccess({ post: action.post })));
      })
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postService
          .addNotengrx(action.value)
          .pipe(map(() => addPostSuccess({ post: action.value })));
      })
    )
  );
  UpdatePost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdatePost),
      mergeMap((action) => {
        return this.postService
          .updateBookngrx(action.id, action.book)
          .pipe(map(() => UpdatePostSuccess({ book: action.book })));
      })
    )
  );
  signupPost$ = createEffect(() => this.actions$.pipe(
    ofType(signupPost),
    mergeMap(action =>{ 
       
        return this.postService.signupngrx(action.value).pipe(
        map(() =>signupPostSuccess({ post: action.value})),
      )  
  
  })));
  // loginPost$ = createEffect(() => this.actions$.pipe(
  //   ofType(loginPost),
  //   mergeMap(action =>{ 
       
  //       return this.postService.getUsersngrx(action.email,action.password).pipe(
  //       map(() =>loadPostsSuccess()))
  
  // })));
}
