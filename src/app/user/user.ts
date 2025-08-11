import { Component, computed, Input, signal, Signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {
  @Input({required: true}) avatar!: string ;
  @Input({required: true}) name!: string ;

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser(): void {
  }
}
