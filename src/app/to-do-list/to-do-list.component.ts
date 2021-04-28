import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  template: `
  <ul>
    <li *ngFor="let text of tabText">
      {{text}}
    </li>
  </ul>
  `,
  styles: [``]
})
export class ToDoListComponent implements OnInit {

  @Input() tabText: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
