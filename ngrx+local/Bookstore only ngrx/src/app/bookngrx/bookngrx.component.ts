import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IBook } from '../../Ibook';
import { Observable } from 'rxjs';
import { UpdatePost, addPost, deletePost, loadPosts } from '../post.actions';
import { selectAllPosts } from '../post.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookngrx',
  templateUrl: './bookngrx.component.html',
  styleUrls: ['./bookngrx.component.css'],
})
export class BookngrxComponent implements OnInit {
  /**
   *defined variable to used Further
   *
   * @type {Observable<IBook[]>}
   * @memberof BookngrxComponent
   */
  posts$!: Observable<IBook[]>;
  authService: any;
  bookForm!: FormGroup;

  tomain = true;
  toshow = false;
  toEdit = false;
  toAdd = false;
  toaddnewbook = true;

  /**
   *
   * @param store 
   * created constructor for creatinfg instance of
   * in these we have grouped our form
   * @param fb
   */
  constructor(private store: Store, private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      author: ['', Validators.required],
      publishedyear: ['', Validators.required],
      genre: ['', Validators.required],
    });
  }

/**
 * automatically called after constructor to get data from firebase
 */
  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.posts$ = this.store.select(selectAllPosts);
  }




  /**
   * when user or admin clicks on add new book btn
   */
  toggle() {
    this.bookForm.reset();
    this.toshow = true;
    this.tomain = false;
    this.toAdd = true;
    this.toEdit = false;
    this.toaddnewbook = false;
  }
 
  /**
   * to delete an particular book fro our firebase database
   * @param post 
   */
  deletebook(post: IBook) {
    let decision = confirm('Are Sure want to delete this Book ? ');
    if (decision == true) {
      this.store.dispatch(deletePost({ post }));
    }
  }


    /**
     * adding a new book to our firebase database
     */
  addBook() {
    this.toAdd = false;
    this.toshow = false;
    this.tomain = true;
    const { value } = this.bookForm;
    this.store.dispatch(addPost({ value }));
    this.toaddnewbook = true;
    this.toEdit = true;
  }


  /**
   * for cancel button to revert back
   */
  toggleforCancel() {
    this.toaddnewbook = true;
    this.toshow = false;
    this.tomain = true;
    this.bookForm.reset();
    this.toAdd = false;
    this.toEdit = false;
  }

/**
 * when edit form shows up there is an update button when that button is clicked this function triigers
 * update an field on an particular book at a time
 */
  updateBook() {
    const { value } = this.bookForm;
    console.log(value);
    this.store.dispatch(UpdatePost({ id: value.id, book: value }));
    this.tomain = true;
    this.toshow = false;
    this.toaddnewbook = true;
  }

  /**
   * when use clicks on Edit button
   * to fetch full data into form
   * @param book 
   */
  getAllDetails(book: IBook) {
    this.toaddnewbook = false;
    const formValue = this.bookForm.patchValue(book);
    this.toAdd = false;
    this.toshow = true;
    this.toEdit = true;
    this.tomain = false;
    console.log(book);
  }
}
