import { Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SubjectComponent } from './subject/subject.component';
import { AuthGuard } from './auth/guard/auth.guard';

export const routes: Routes = [
    { path: 'auth', component: AuthComponent },
    { path: '', redirectTo: '/auth', pathMatch: 'full' },
    { path: 'subjects', component: SubjectComponent, canActivate: [AuthGuard]}
];
