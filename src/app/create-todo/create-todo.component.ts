import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-create-todo',
  template: `
  <input type="text" [(ngModel)]="text" (keydown.enter)="newText.emit(text)"/>
  <button (click)="newText.emit(text)">Creer
  </button>
  `,
  styles: [``]
})
export class CreateTodoComponent implements OnInit {


  @Input() text: string;
  @Output() newText = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit(): void {
  }

}
