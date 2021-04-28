import { Component, Input, OnInit } from '@angular/core';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-to-do-list',
  template: `
  <ul>
    <li *ngFor="let text of tabText">
      <app-todo-list-item [text]="text" [tabText]="tabText"></app-todo-list-item>
    </li>
  </ul>
  `,
  styles: [``]
})
export class ToDoListComponent implements OnInit {

  @Input() tabText: Todo[];
  constructor() { }

  ngOnInit(): void {
  }

}
