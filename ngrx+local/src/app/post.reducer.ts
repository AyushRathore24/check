// src/app/store/post.reducer.ts
import { createReducer, on } from '@ngrx/store';

import * as PostActions from './post.actions';
import { Post } from './post.model';
import { IBook } from './Ibook';
import { UpdatePostSuccess, addPostSuccess, deletePostSuccess } from './post.actions';

export interface PostState {
  posts: IBook[];
 
}

export const initialState: PostState = {
  posts: []
};

export const postReducer = createReducer(
  initialState,
 on(PostActions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    posts
  })),
  on(deletePostSuccess, (state, { post}) => ({
    ...state,
    post
  })),
  on(addPostSuccess, (state, { post}) => ({
    ...state,
    post
  })),
  on(UpdatePostSuccess, (state, { book}) => ({
    ...state,
    book
  })),






  // on(UpdatePostsSuccess, (state, { posts }) => ({
  //   ...state,
  //   book
  // })),
  // on(PostActions.deletePostSuccess, (state, { id }) => ({
  //   ...state,
  //   posts: state.posts.filter(post => post.id !== id)
  // }))

);
