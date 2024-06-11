// src/app/store/post.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
// import { PostService } from '../services/post.service';
import * as PostActions from './post.actions';
import { AuthService } from './auth.service';
import * as actions from './post.actions';
import {  UpdatePost, UpdatePostSuccess, addPost, addPostSuccess, deletePost, deletePostSuccess } from './post.actions';

@Injectable()
export class PostEffects {
 
  constructor(
    private actions$: Actions,
    private postService: AuthService
  ) {}
   
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.loadPosts),
    mergeMap(() => this.postService.getBooks()
      .pipe(
        map(posts => PostActions.loadPostsSuccess({ posts }))
      ))
    )
  );

    
  deletePost$ = createEffect(() => this.actions$.pipe(
    ofType(deletePost),
    mergeMap(action =>{
      return this.postService.deleteBookngrx(action.post ).pipe(
        map((post) =>deletePostSuccess({ post: action.post })),
      )  
 
})));


addPost$ = createEffect(() => this.actions$.pipe(
  ofType(addPost),
  mergeMap(action =>{
    return this.postService.addNotengrx(action.value ).pipe(
      map((post) =>addPostSuccess({ post: action.value})),
    )  

})));
UpdatePost$ = createEffect(() => this.actions$.pipe(
  ofType(UpdatePost),
  mergeMap(action =>{ 
     
      return this.postService.updateBookngrx(action.id,action.book).pipe(
      map(() =>UpdatePostSuccess({ book: action.book})),
    )  

})));
      

}