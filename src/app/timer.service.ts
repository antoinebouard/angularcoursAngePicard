import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class TimerService {

  constructor() { setInterval(() => this.y.next("Kilian est bo"), 1000) }

  private y = new Subject<string>();

  get observable(): Observable<string> {
    return this.y.asObservable();
  }
}


