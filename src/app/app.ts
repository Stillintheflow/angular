import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { User } from "./user/user";

@Component({
  selector: 'app-root',
  imports: [Header, User],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular100-d-o-c');
}
