import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimaryButton } from './shared/components/buttons/primary-button/primary-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PrimaryButton],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('floricultura-angular');
}
