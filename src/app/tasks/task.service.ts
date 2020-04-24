import { Task } from './task.model';
import { EventEmitter } from '@angular/core';

export class TaskService {
  taskSelected = new EventEmitter<Task>();

  private tasks: Task[] = [
    new Task('name of task', 'desc of task', 1, 10, 'FE'),
    new Task('name of task 2', 'desc of task 2', 1, 20, 'FE'),
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    console.log(task);
  }
}
