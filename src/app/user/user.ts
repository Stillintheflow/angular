import { Component, computed, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  @Input({required: true}) id!: string ;
  @Input({required: true}) avatar!: string ;
  @Input({required: true}) name!: string ;
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output();

  // imagePath = computed(() => {
  //   return `assets/users/${this.avatar()}`;
  // });

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser(): void {
    this.select.emit(this.id);
  }
}
