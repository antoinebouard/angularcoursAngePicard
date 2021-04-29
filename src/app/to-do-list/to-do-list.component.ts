import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-to-do-list',
  template: `
  <mat-list>
    <mat-list-item *ngFor="let text of tabText">
      <app-todo-list-item [text]="text" [tabText]="tabText"></app-todo-list-item>
    </mat-list-item>
  </mat-list>
  `,
  styles: [``]
})
export class ToDoListComponent implements OnInit {

  @Input() tabText: Todo[];
  constructor() { }

  ngOnInit(): void {
  }

}

// <mat-list>
//  <mat-list-item> Pepper </mat-list-item>
//  <mat-list-item> Salt </mat-list-item>
//  <mat-list-item> Paprika </mat-list-item>
// </mat-list>
