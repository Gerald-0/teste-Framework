import { Component, OnInit } from '@angular/core';
import {AlbunsService,Album} from '../../service/albuns.service'
 
@Component({
  selector: 'app-albuns',
  templateUrl: './albuns.component.html',
  styleUrls: ['./albuns.component.css']
})
export class AlbunsComponent implements OnInit {

  albums: Album[] = [];
  constructor(private albumService: AlbunsService) { }

  ngOnInit(): void {
    this.albumService.getAlbums().then(x => this.albums = x);  
  }

}
