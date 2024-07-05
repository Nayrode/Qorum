import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth/service/auth.service';

@Component({
  selector: 'layout-bar',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './layout-bar.component.html',
})
export class LayoutBarComponent {
  username: string | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  async ngOnInit() {
    this.username = await this.authService.getCurrentUser();
  }

  onClick() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}