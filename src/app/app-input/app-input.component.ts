import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-input',
  template: `
    <input type="text" [(ngModel)]="text" />
    <p>{{ text }}</p>
    `,
  styles: [`h1 {
    color : grey;
  }`]
})
export class AppInputComponent implements OnInit {

  text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
