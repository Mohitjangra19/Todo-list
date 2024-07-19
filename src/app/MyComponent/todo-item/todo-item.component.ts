import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Todo } from '../../Todo';


@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit{
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")

  }
}
