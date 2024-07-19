import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TodosComponent } from "./MyComponent/todos/todos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TodosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwh-todo-list';
}
