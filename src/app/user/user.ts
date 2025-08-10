import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  slecetedUser = DUMMY_USERS[randomIndex];

  get imagePath(): string {
    return `assets/users/${this.slecetedUser.avatar}`;
  }
}
