import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeAdmin } from './features/adminPage/home-admin/home-admin';
import { LandingPage } from './features/buyPage/landing-page/landing-page';
import { Login } from './features/auth/login/login';
import { Cadastro } from './features/auth/cadastro/cadastro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeAdmin, LandingPage, Login, Cadastro],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('floricultura-angular');
}
