import { Routes } from '@angular/router';
import { aula01 } from './pages/home/home';
import { Ex1 } from './pages/ex1/ex1';
import { Ex2 } from './pages/ex2/ex2';
import { Aula02 } from './pages/aula02/aula02';

export const routes: Routes = [
  { path: '', redirectTo: 'aula02', pathMatch: 'full' },
  { path: 'aula01', component: aula01 },
  { path: 'aula02', component: Aula02 },
  { path: 'Ex1', component: Ex1 },
  { path: 'Ex2', component: Ex2 },
  { path: '**', component: aula01 },
];
