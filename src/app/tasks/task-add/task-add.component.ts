import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output
} from "@angular/core";
import { Task } from "../task.model";

@Component({
  selector: "app-task-add",
  templateUrl: "./task-add.component.html",
  styleUrls: ["./task-add.component.css"]
})
export class TaskAddComponent implements OnInit {
  @Output() newTaskAdded = new EventEmitter<Task>();
  @ViewChild("inputName", { static: false }) nameInputRef: ElementRef;
  @ViewChild("inputDisc", { static: false }) discInputRef: ElementRef;
  @ViewChild("inputTimeMin", { static: false }) timeMinInputRef: ElementRef;
  @ViewChild("inputTimeMax", { static: false }) timeMaxInputRef: ElementRef;
  @ViewChild("inputType", { static: false }) typeInputRef: ElementRef;

  ngOnInit(): void {}

  onAddTask() {
    const name = this.nameInputRef.nativeElement.value;
    const desc = this.discInputRef.nativeElement.value;
    const minTime = this.timeMinInputRef.nativeElement.value;
    const maxTime = this.timeMaxInputRef.nativeElement.value;
    const type = this.typeInputRef.nativeElement.value;
    const newTask = new Task(name, desc, minTime, maxTime, type);
    console.log(newTask);
    this.newTaskAdded.emit(newTask);
  }
}
