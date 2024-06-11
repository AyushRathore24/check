//for the root
import { Injectable } from '@angular/core';
//used interface for the  storing form values
import { IBook } from './Ibook';
//used for angular fire and collection table
import { Firestore, collectionData } from '@angular/fire/firestore'; 
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'; //fireabse methods for CRUD
import { Observable, from } from 'rxjs'; //Observable
import { Router } from '@angular/router'; //using router for navigation
import { Iregister } from './Iregister';



@Injectable({
  providedIn: 'root',
})


export class AuthService {
  constructor(private fs: Firestore, private router: Router) {}
  
 isloggedin=false;


  /**
   * getting data from fire(firebase) from  Book collection
   * return promise used because we want to add single data at one time
   * @param book
   * @returns
   */

  addNotengrx(book: IBook) {
    return from(addDoc(collection(this.fs, 'Books'), book));
  }

  /**
   * used observable because we can access multiple data at a time
   * @returns
   */
  getBooks(): Observable<IBook[]> {
    let notesRef = collection(this.fs, 'Books');
    return collectionData(notesRef, { idField: 'id' }) as Observable<IBook[]>;
  }

  /**
   *  taken id for the reference
   * @param book return promise used because we want to delete single data at one time
   * @returns
   */
  deleteBookngrx(book: IBook) {
    let docRef = doc(this.fs, `Books/${book.id}`);
    return from(deleteDoc(docRef));
  }

  /**
   * taken id for the reference
   * @param book return promise used because we want to update single data at one time
   * @param books
   * @returns
   */

  updateBookngrx(book: IBook, books: any) {
    // console.log(book+"-----"+books);
    console.log(book);
    let docRef = doc(this.fs, `Books/${book}`);
    return from(updateDoc(docRef, books));
  }


  signupngrx(addreg:Iregister){
    return from(addDoc(collection(this.fs,'Registration2'),addreg));
  }
  getUsersngrx():Observable<Iregister[]>{
    let notesRef = collection(this.fs,'Registration')
    
    return collectionData(notesRef,{idField:'id'}) as Observable<Iregister[]>
  }
  

}
