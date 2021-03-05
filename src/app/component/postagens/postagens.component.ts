import { Component, OnInit } from '@angular/core';
import{PostagensService,Post}  from '../../service/postagens.service'

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})
export class PostagensComponent implements OnInit {
  posts: Post[] = [];
  constructor(private postagensService: PostagensService) { }

  ngOnInit(): void {
    this.postagensService.getPostagens().then(x => this.posts = x);  

  }

}
