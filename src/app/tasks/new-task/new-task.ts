import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.scss'
})
export class NewTask {
  @Output() cancel = new EventEmitter<void>();

  onCancelAddTask(): void {
    this.cancel.emit();
  }
}
