import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface Album {   id:string;  title:string;

}
@Injectable({
  providedIn: 'root'
})
export class AlbunsService {


  constructor(private http: HttpClient) {}

    getAlbums() {    
      return this.http.get<any>('https://jsonplaceholder.typicode.com/albums/').toPromise().then(res => <Album[]>res);    
    }
}
