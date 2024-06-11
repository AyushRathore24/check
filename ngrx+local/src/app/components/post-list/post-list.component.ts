// src/app/components/post-list/post-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBook } from 'src/app/Ibook';
import { loadPosts } from 'src/app/post.actions';
import { Post } from 'src/app/post.model';
import { selectAllPosts } from 'src/app/post.selectors';
// import { Post } from '../../models/post.model';
// import { loadPosts } from '../../store/post.actions';
// import { selectAllPosts, selectPostsLoading, selectPostsError } from '../../store/post.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts$!: Observable<IBook[]>;


  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.posts$ = this.store.pipe(select(selectAllPosts));

  }
}
