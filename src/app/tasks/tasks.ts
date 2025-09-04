import { Component, Input } from '@angular/core';
import { Task } from "./task/task";
import { NewTask } from "./new-task/new-task";
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.scss'
})
export class Tasks {
  @Input({required: true}) userId!: string;
  @Input({required: true}) name!: string;
  isAddingtaks: boolean = false;

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onStartAddTask(): void {
    this.isAddingtaks = true;
  }

  onCancelAddTask(): void {
    this.isAddingtaks = false;
  }

}
