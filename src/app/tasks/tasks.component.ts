import { Component, OnInit } from "@angular/core";
import { Task } from "./task.model";
import { TaskService } from "./task.service";

@Component({
  selector: "app-tasks",
  templateUrl: "./tasks.component.html",
  styleUrls: ["./tasks.component.css"],
  providers: [TaskService]
})
export class TasksComponent implements OnInit {
  ngOnInit(): void {}

  pushNewTask(task: Task) {
    this.tasks.push(task);
  }
}
