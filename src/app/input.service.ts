import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  constructor() { }

  private y = new Subject<string>();

  get observable(): Observable<string> {
    return this.y.asObservable();
  }

  public add(value : string) {
    this.y.next(value);
  }


}
