import { Routes } from '@angular/router';
import { PrimaryButton } from './shared/components/buttons/primary-button/primary-button';
import { HomeAdmin } from './features/adminPage/home-admin/home-admin';
import { LandingPage } from './features/buyPage/landing-page/landing-page';
import { Login } from './features/auth/login/login';
import { Cadastro } from './features/auth/cadastro/cadastro';
import { CriarProduto } from './features/adminPage/criar-produto/criar-produto';
import { VerProduto } from './features/adminPage/ver-produto/ver-produto';

export const routes: Routes = [
  {
    path: '',
    component: LandingPage,
  },

  {
    path: 'admin/home',
    component: HomeAdmin
  },

  {
    path: 'login',
    component: Login
  },

  {
    path: 'cadastro',
    component: Cadastro
  },

  {
    path: 'admin/home/admin/criarProduto',
    component: CriarProduto
  },
  {
    path: 'admin/home/admin/verProduto/:id',
    component: VerProduto
  }



];
