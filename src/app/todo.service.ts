import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


export interface Todo {
  value: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todoList : Todo[] = [{id : Math.floor(Math.random() * 100000),value: "Tache 1"}, {id : Math.floor(Math.random() * 100000),value: "Tache 2"}];
  constructor() { }

  private y = new BehaviorSubject<Todo[]>(this.todoList);

  get observable(): Observable<Todo[]> {
    return this.y.asObservable();
  }

  public add(value: string) {
    this.todoList.push({id : Math.floor(Math.random() * 100000), value: value});
    this.y.next(this.todoList);
  }

  public delete(todo: Todo){
    this.todoList.splice(this.todoList.indexOf(todo), 1);
    this.y.next(this.todoList);
  }

  public vider() {
    this.todoList = [];
    this.y.next(this.todoList);
  }
}
