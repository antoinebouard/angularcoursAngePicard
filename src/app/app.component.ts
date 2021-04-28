import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-app-input  [text]="appText"
      (newText)="appText = $event"></app-app-input>
    <app-app-input [text]="appText"
      (newText)="appText = $event"></app-app-input>
    `,
  styles: [``]
})
export class AppComponent {
  appText: string = "text";
}
