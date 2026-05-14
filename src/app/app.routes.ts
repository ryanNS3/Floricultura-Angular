import { Routes } from '@angular/router';
import { PrimaryButton } from './shared/components/buttons/primary-button/primary-button';
import { HomeAdmin } from './features/adminPage/home-admin/home-admin';
import { LandingPage } from './features/buyPage/landing-page/landing-page';
import { Login } from './features/auth/login/login';
import { Cadastro } from './features/auth/cadastro/cadastro';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },

  {
    path: 'homeAdmin',
    component: HomeAdmin
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'cadastro',
    component: Cadastro
  }



];
