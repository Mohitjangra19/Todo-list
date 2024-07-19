import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
import { NgForm } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoItemComponent } from "../todo-item/todo-item.component"
import { AddTodoComponent } from '../add-todo/add-todo.component';


@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [ CommonModule, RouterOutlet, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
[x: string]: any;

  todos: Todo[];
  constructor() {
    this.todos = [];
  }





  ngOnInit(): void {
    const localData = localStorage.getItem("todos");
    if (localData != null) {
      this.todos = JSON.parse(localData);
    }
  }

  deleteTodo(todo: Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
  addTodo(todo: Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }


}
