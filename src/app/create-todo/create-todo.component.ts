import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo.service';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-create-todo',
  template: `
  <input type="text" [(ngModel)]="text" (keydown.enter)="this.create()"/>
  <button (click)="this.create()">Creer
  </button>
  `,
  styles: [``]
})
export class CreateTodoComponent implements OnInit {


  @Input() text: string;
  constructor(public todo : TodoService) { }

  ngOnInit(): void {
  }

  public create() {
    this.todo.add(this.text);
    this.text= "";
  }

}
