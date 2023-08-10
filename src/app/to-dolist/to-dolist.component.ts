import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.css'],
})
export class ToDolistComponent implements OnInit {
  constructor() {}
  //using inpur decorator
  @Input() todos: string[];
  //using viewchild
  // todos: string[] = [];
  // addTodoItem(todo: string) {
  //   this.todos.unshift(todo);
  // }
  ngOnInit() {}
  deleteTodoItem(todo: string) {
    const index = this.todos.indexOf(todo);
    // if (index !== -1) {
    this.todos.splice(index, 1);
    // }
  }
}
