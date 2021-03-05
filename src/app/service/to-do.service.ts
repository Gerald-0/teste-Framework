import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Todo {   id:string;  title:string;completed:boolean}



@Injectable({
  providedIn: 'root'
})
export class ToDoService {


  constructor(private http: HttpClient) {}

    getTodo() {    
      return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/').toPromise().then(res => <Todo[]>res);    
    }
}
