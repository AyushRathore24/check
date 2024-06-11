
import { createAction, props } from '@ngrx/store';

import { IBook } from '../Ibook';
import { Iregister } from './Iregister';

export const loadPosts = createAction('[Post] Load Posts');

export const loadPostsSuccess = createAction(
  '[Post] Load Posts Success',
  props<{ posts: IBook[] }>()
);

export const deletePost = createAction(
  '[Item] Delete Item',
  props<{ post: IBook }>()
);

export const deletePostSuccess = createAction(
  '[Item] Delete Item Success',
  props<{ post: IBook }>()
);

export const addPost = createAction(
  '[Item] add Item',
  props<{ value: IBook }>()
);

export const addPostSuccess = createAction(
  '[Item] add  Item Success',
  props<{ post: IBook }>()
);

export const UpdatePost = createAction(
  '[Item] update Item',
  props<{ id: any; book: IBook }>()
);

export const UpdatePostSuccess = createAction(
  '[Item] update Item Success',
  props<{ book: IBook }>()
);

export const signupPost = createAction(
  '[Item] update Item',
  props<{ value: Iregister}>()
);

export const signupPostSuccess = createAction(
  '[Item] update Item Success',
  props<{ post:Iregister }>()
);
export const loginPost = createAction(
  '[Item] update Item',
  props<{ email: string, password: string }>());


export const loginSuccess = createAction(
  '[Item] update Item Success',
  props<{ post:Iregister }>());


