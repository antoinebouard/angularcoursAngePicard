import { Component } from '@angular/core';
import { InputService } from './input.service';

@Component({
  selector: 'app-root',
  template: `
    <app-app-input  [text]="appText"
      (add)="appText = $event"></app-app-input>
    <app-app-input [text]="appText"
      (add)="appText = $event"></app-app-input>
    `,
  styles: [``]
})
export class AppComponent {

  constructor (private input : InputService) {
    this.input.observable.subscribe((e) => this.appText = e);
   }


  appText: string = "text";
}
