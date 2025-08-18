import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskInterface } from './task.model';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss'
})
export class Task {
  @Input({required: true}) task!: TaskInterface;
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(): void {
    this.complete.emit(this.task.id);
  }
}
