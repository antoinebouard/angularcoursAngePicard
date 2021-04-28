import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-app-input',
  template: `
    <input type="text" [(ngModel)]="text" (keyup)="newText.emit(text)" />
    <p>{{ text }}</p>
    `,
  styles: [``]
})
export class AppInputComponent implements OnInit {

  @Input() text: string;
  @Output() newText = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
