import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo.service';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-todo-list-item',
  template: `
  <p>ID : {{ text.id }} - {{ text.value }}<button class="button" mat-raised-button color="primary" (click)="this.todo.delete(text)">Supprimer</button></p>
  `,
  styles: [`.button {
    margin-left: 10px;
  }`]
})
export class TodoListItemComponent implements OnInit {

  @Input() text: Todo;
  @Input() tabText: Todo[]
  constructor (public todo : TodoService) {
   }

  ngOnInit(): void {
    console.log(this.text);
  }

}
