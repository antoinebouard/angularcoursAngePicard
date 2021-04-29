import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-todo-list-item',
  template: `
  <p>ID : {{ text.id }} - {{ text.value }}</p><button (click)="delete.emit()">Supprimer</button>
  `,
  styles: [``]
})
export class TodoListItemComponent implements OnInit {

  @Input() text: Todo;
  @Input() tabText: Todo[]
  @Output() delete = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.text);
  }

}
