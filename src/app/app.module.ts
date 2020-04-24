import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TasksComponent } from "./tasks/tasks.component";
import { TasksListComponent } from "./tasks/tasks-list/tasks-list.component";
import { TaskComponent } from "./tasks/tasks-list/task/task.component";
import { TaskDetailComponent } from "./tasks/task-detail/task-detail.component";
import { TaskEditComponent } from "./tasks/task-edit/task-edit.component";
import { TaskAddComponent } from "./tasks/task-add/task-add.component";
import { DropdownDerective } from "./shared/dropdown.derective";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksListComponent,
    TaskComponent,
    TaskDetailComponent,
    TaskEditComponent,
    TaskAddComponent,
    DropdownDerective
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
