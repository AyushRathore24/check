import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post} from './post';
@Injectable({
  providedIn: 'root'
})
export class DataService {
url =  'https://jsonplaceholder.typicode.com/posts';
data:[]=[];   //taken data variable as default to take this as empty array and return by filling  this
  

constructor(private http:HttpClient) {   }      


  getData(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }

  AddData(data: Post): Observable<Post> {
    return this.http.post<Post>(this.url, data);
  }

  updateData(id: number): Observable<Post> {
    return this.http.put<Post>(`${this.url}/${id}`, id);
  }

  DeleteData(id: number): Observable<Post> {
    return this.http.delete<Post>(`${this.url}/${id}`);
  }
}
