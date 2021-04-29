import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoService } from '../todo.service';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-create-todo',
  template: `
    <input matInput type="text" class="input" [(ngModel)]="text" (keydown.enter)="this.create()"/>
    <button class="button" mat-raised-button color="primary" (click)="this.create()">Creer</button>
  `,
  styles: [`
    .input {
      margin-top: 20px;
      margin-left: 14px;
    }
    .button {
      margin-left: 10px;
    }
  `]
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
