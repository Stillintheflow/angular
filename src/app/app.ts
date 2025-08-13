import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from "./user/user";
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [Header, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular100-d-o-c');
  users = DUMMY_USERS;
  slectedUserId = 'u1';

  get selectedUser() {
    return this.users.find(user => user.id === this.slectedUserId);
  }

  onSelectUserApp(id: string) {
    this.slectedUserId = id;
  }
}
