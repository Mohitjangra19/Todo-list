import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {
  title: string;
  des: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  constructor( ) {}
  ngOnInit(): void {
  }
    onSubmit() {
      const todo = {
        sno: 8,
        title: this.title,
        des: this.des,
        active: true
      }
    this.todoAdd.emit(todo);
  }
}
