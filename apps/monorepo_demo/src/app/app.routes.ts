import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TaskComponent } from './task.component';

export const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'task', component: TaskComponent } 
];
