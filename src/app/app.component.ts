import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-create-todo
      (newText)="tabText.push($event)"></app-create-todo>
    <app-to-do-list [tabText]="tabText"></app-to-do-list>
    <button (click)="tabText.splice(0, tabText.length)">Vider
    </button>
    `,
  styles: [``]
})
export class AppComponent {
  tabText: string[] = ["Tache 1", "Tache 2 "];


}
