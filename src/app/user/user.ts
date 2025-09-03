import { Component, computed, Input, Output, EventEmitter } from '@angular/core';
import { UserInterface } from './user.model';
import { Card } from "../shared/card/card";

// type UserType = {
//   id: string;
//   avatar: string;
//   name: string;
// };

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  @Input({required: true}) user!: UserInterface;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output();

  // imagePath = computed(() => {
  //   return `assets/users/${this.avatar()}`;
  // });

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser(): void {
    this.select.emit(this.user.id);
  }
}
