import { TmplAstBoundText } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Apollo, gql } from 'apollo-angular';


@Component({
  selector: 'app-root',
  template: `
  <div *ngIf="loading">
      Loading...
    </div>
    <div *ngIf="error">
      Error :(
    </div>
  <div *ngIf="continents">
    <ul>
      <li *ngFor="let continent of continents">
        <p>{{ continent.name }}</p>
      </li>
    </ul>
  </div>`,
  styles: [``]
})
export class ExchangeRates implements OnInit {
  continents: any[];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql`
        {
          continents {
            name
          }
        }
        `,
      })
      .valueChanges.subscribe((result: any) => {
        this.continents = result?.data?.continents;
        this.loading = result.loading;
        this.error = result.error;
      });
  }
}




