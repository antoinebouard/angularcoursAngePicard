import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-todo',
  template: `
  <input type="text" [(ngModel)]="text"/>
  <button (click)="newText.emit(text)">Creer
  </button>
  `,
  styles: [``]
})
export class CreateTodoComponent implements OnInit {


  @Input() text: string;
  @Output() newText = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
