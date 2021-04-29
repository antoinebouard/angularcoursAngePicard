import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputService } from '../input.service';

@Component({
  selector: 'app-app-input',
  template: `
    <input type="text" [(ngModel)]="text" (keyup)="input.add(text)" />
    <p>{{ text }}</p>
    `,
  styles: [``]
})
export class AppInputComponent implements OnInit {

  @Input() text: string;
  @Output() newText = new EventEmitter<string>();
  constructor(public input : InputService) { }

  ngOnInit(): void {
  }



}
