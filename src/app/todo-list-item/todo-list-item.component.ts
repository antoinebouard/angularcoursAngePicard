import { Component, Input, OnInit } from '@angular/core';

export interface Todo {
  value: string;
  id: number;
}

@Component({
  selector: 'app-todo-list-item',
  template: `
  <p>ID : {{ text.id }} - {{ text.value }}</p><button (click)="tabText.splice(tabText.indexOf(text))">Supprimer</button>
  `,
  styles: [``]
})
export class TodoListItemComponent implements OnInit {

  @Input() text: Todo;
  @Input() tabText: Todo[]
  constructor() { }

  ngOnInit(): void {
    console.log(this.text);
  }

}
