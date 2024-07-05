import { Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { SubjectComponent } from './components/subject/subject.component';
import { AuthGuard } from './components/auth/guard/auth.guard';
import { SubjectCreateComponent } from './components/subject-create/subject-create.component';
import { PostComponent } from './components/post/post.component';

export const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'subjects', component: SubjectComponent, canActivate: [AuthGuard] },
  { path: 'subject', component: SubjectCreateComponent, canActivate: [AuthGuard] },
  { path: 'subject/:id', component: PostComponent, canActivate: [AuthGuard] }
];
