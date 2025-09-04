import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { TaskInterface } from './task.model';
import { Card } from "../../shared/card/card";
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {
  @Input({required: true}) task!: TaskInterface;
  constructor(private tasksService: TasksService) {}

  onCompleteTask() {
    this.tasksService.removeTask(this.task.id);
  }
}
