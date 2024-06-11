import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IBook } from '../Ibook';
import { Observable } from 'rxjs';
import {  UpdatePost, addPost, deletePost,  loadPosts } from '../post.actions';
import { selectAllPosts } from '../post.selectors';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-bookngrx',
  templateUrl: './bookngrx.component.html',
  styleUrls: ['./bookngrx.component.css']
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
  bookForm!:FormGroup;
   
  tomain=true;
  toshow=false;
  toEdit=false;
  toAdd=false;
  toaddnewbook=true;


  
  /**
   * 
   * @param store created constructor for creatinfg instance of 
   * in these we have grouped our form
   * @param fb 
   */
  constructor(private store: Store,
    private fb:FormBuilder) {
      this.bookForm = this.fb.group({
      id:[''],
      title:['',Validators.required],
      author:['',Validators.required],
      publishedyear:['',Validators.required],
      genre:['',Validators.required],
      
    })}
  toggle(){

    
    this.bookForm.reset();
    this.toshow=true;
    this.tomain=false;
    this.toAdd=true;
    this.toEdit=false;
    this.toaddnewbook=false;
  
   }
  ngOnInit(): void {
    this.store.dispatch(loadPosts());
    this.posts$ = this.store.select(selectAllPosts);

  }

  deletebook(post:IBook){
    let decision= confirm("Are Sure want to delete this Book ? ");
    if(decision ==true){
      this.store.dispatch(deletePost({post}));
    }
  } 


  addBook(){
    this.toAdd=false;
    this.toshow=false;  
    this.tomain=true;

    const { value } = this.bookForm
    console.log(value);
    const bookObj={
      id:'',
      title: value.title,
      author: value.author,
      publishedyear:value.publishedyear,
      genre:value.genre
    }

    this.store.dispatch(addPost({value}));
    this.toaddnewbook=true;
    this.toEdit=true;
  }
  
  
  
  toggleforCancel(){
    this.toaddnewbook=true;
  this.toshow=false;
  this.tomain=true;
  this.bookForm.reset();
  this.toAdd=false;
  this.toEdit=false;
}


// update data
updateBook() {

  const { value } = this.bookForm;
 console.log(value);
 
 // Create an updated book object

 const bookObj :IBook ={
   id:value.id,
   title: value.title,
   author: value.author,
   publishedyear:value.publishedyear,
   genre:value.genre
  }
  console.log(bookObj)
  this.store.dispatch(UpdatePost({id:value.id,book:bookObj})); 
  this.tomain=true;
  this.toshow=false;
  this.toaddnewbook=true;
  
}
getAllDetails(book:IBook){
 
  this.toaddnewbook=false;
  const formValue = this.bookForm.patchValue(book)
   this.toAdd=false;
   this.toshow=true;
   this.toEdit=true; 
   this.tomain=false;
  console.log(book)
}

}
