import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


export interface Todo {
  value: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todo : Todo[] = [{id : Math.floor(Math.random() * 100000),value: "Tache 1"}, {id : Math.floor(Math.random() * 100000),value: "Tache 2"}];
  constructor() { }

  private y = new Subject<string>();

  get observable(): Observable<string> {
    return this.y.asObservable();
  }

  public add(value: string) {
    this.todo.push({id : Math.floor(Math.random() * 100000), value: value})
    this.y.next(this.todo.toString());
  }

  public delete(todo: Todo){
    this.todo.splice(this.todo.indexOf(todo), 1)
    this.y.next(this.todo.toString());
  }

  public vider() {
    this.todo = [];
    this.y.next(this.todo.toString());
  }
}
