import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-to-do-list',
  template: `
  <ul>
    <li *ngFor="let text of tabText">
      <app-todo-list-item [text]="text" [tabText]="tabText" (delete)="this.delete.emit(todo)"></app-todo-list-item>
    </li>
  </ul>
  `,
  styles: [``]
})
export class ToDoListComponent implements OnInit {

  @Input() tabText: Todo[];
  @Output() delete = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

}
