import { TmplAstBoundText } from '@angular/compiler';
import { Component } from '@angular/core';
import { TodoService } from './todo.service';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-root',
  template: `
    <app-create-todo
      (newText)="this.todo.add($event)"></app-create-todo>
    <app-to-do-list [tabText]="tabText" (delete)="deleteTodo($event)"></app-to-do-list>
    <button (click)="this.todo.vider()">Vider
    </button>
    `,
  styles: [``]
})
export class AppComponent {

  text: string
  tabText : Todo[];

  constructor (public todo : TodoService) {
    this.todo.observable.subscribe(tabText => this.tabText = this.tabText);
   }

  deleteTodo(todo : Todo) {
    this.tabText.splice(this.tabText.indexOf(todo), 1)
  }



}


