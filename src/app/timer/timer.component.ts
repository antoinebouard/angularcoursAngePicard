import { Component, OnInit } from '@angular/core';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer',
  template: ``,
  styles: [``]
})
export class TimerComponent implements OnInit {

  constructor(private timerService : TimerService) { }

  ngOnInit(): void {
    this.timerService.observable.subscribe((c) => console.log(c));
  }
}
