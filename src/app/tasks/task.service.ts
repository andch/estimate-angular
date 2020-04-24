import { Task } from "./task.model";

export class TaskService {
  private tasks: Task[] = [
    new Task("name of task", "desc of task", 1, 10, "FE"),
    new Task("name of task 2", "desc of task 2", 1, 20, "FE")
  ];

  getTasks() {
    return this.tasks.slice();
  }
}
