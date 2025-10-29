import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Ex1 } from './pages/ex1/ex1';
import { Ex2 } from './pages/ex2/ex2';

export const routes: Routes = [
  { path: '', redirectTo: 'aula01', pathMatch: 'full' },
  { path: 'aula01', component: Home },
  { path: 'Ex1', component: Ex1 },
  { path: 'Ex2', component: Ex2 },
  { path: '**', component: Home },
];
