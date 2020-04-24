import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Task } from '../../task.model';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() taskSelected = new EventEmitter<void>();
  averageTime: number;

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.averageTime =
      Number(this.task.minTime) + Number(this.task.maxTime) / 2;
  }

  onSelected() {
    this.taskService.taskSelected.emit(this.task);
  }
}
