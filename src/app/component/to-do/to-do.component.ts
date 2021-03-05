import { Component, OnInit } from '@angular/core';
import{ToDoService,Todo}  from '../../service/to-do.service'

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  todos: Todo[] = [];
  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this.todoService.getTodo().then(x => this.todos = x);  

  }

}
