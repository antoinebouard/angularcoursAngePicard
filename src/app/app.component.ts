import { TmplAstBoundText } from '@angular/compiler';
import { Component } from '@angular/core';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-root',
  template: `
    <app-create-todo
      (newText)="add($event)"></app-create-todo>
    <app-to-do-list [tabText]="tabText" (delete)="deleteTodo($event)"></app-to-do-list>
    <button (click)="tabText=[]">Vider
    </button>
    `,
  styles: [``]
})
export class AppComponent {
  tabText: Todo[] = [{id : Math.floor(Math.random() * 100000),value: "Tache 1"}, {id : Math.floor(Math.random() * 100000),value: "Tache 2"}];

  add(value : string) {
    this.tabText.push({id : Math.floor(Math.random() * 100000), value: value});
  }

  deleteTodo(todo : Todo) {
    this.tabText.splice(this.tabText.indexOf(todo), 1);
  }
}


