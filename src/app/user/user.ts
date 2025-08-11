import { Component, computed, signal, Signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  slecetedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => {
    return `assets/users/${this.slecetedUser().avatar}`;
  });

  // get imagePath(): string {
  //   return `assets/users/${this.slecetedUser.avatar}`;
  // }

  onSelectUser(): void {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.slecetedUser.set(DUMMY_USERS[randomIndex]);
  }
}
