import { Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
export const routes: Routes = [
  { path: 'map', component: ContainerComponent },
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: '**', redirectTo: '/map' },
];