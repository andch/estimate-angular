import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Task } from "../task.model";
import { TaskService } from "../task.service";

@Component({
  selector: "app-tasks-list",
  templateUrl: "./tasks-list.component.html",
  styleUrls: ["./tasks-list.component.css"]
})
export class TasksListComponent implements OnInit {
  tasks: Task[];
  @Output() taskWasSelected = new EventEmitter<Task>();

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
  onTaskSelected(task: Task) {
    this.taskWasSelected.emit(task);
  }
}
