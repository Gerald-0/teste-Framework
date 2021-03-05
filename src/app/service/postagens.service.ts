import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Post {   userId:string; id:string;  title:string; body:string;

}
@Injectable({
  providedIn: 'root'
})
export class PostagensService {

  constructor(private http: HttpClient) {}

    getPostagens() {    
      return this.http.get<any>('https://jsonplaceholder.typicode.com/posts/').toPromise().then(res => <Post[]>res);    
    }
}
