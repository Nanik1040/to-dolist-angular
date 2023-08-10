import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ToDolistComponent } from '../to-dolist/to-dolist.component';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css'],
})
export class ToDoInputComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  data: string = '';
  todos: string[] = [];

  // @ViewChild('toDoListComponent') toDoListComponent: ToDolistComponent;
  // addTodo() {
  //   console.log('lol');
  //   if (this.data && this.toDoListComponent) {
  //     this.toDoListComponent.addTodoItem(this.data);
  //     this.data = '';
  //   }
  // }

  addTodo() {
    if (this.data) {
      this.todos.unshift(this.data);
      this.data = '';
    }
  }
}
