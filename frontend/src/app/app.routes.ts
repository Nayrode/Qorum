import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { SubjectComponent } from './components/subject/subject.component';
import { AuthGuard } from './components/auth/guard/auth.guard';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'subjects', component: SubjectComponent, canActivate: [AuthGuard] },
];
