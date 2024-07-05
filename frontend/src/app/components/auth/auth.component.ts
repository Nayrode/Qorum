import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { LayoutBarComponent } from '../layout-bar/layout-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, LayoutBarComponent, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  username!: string;
  password!: string;

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.authService.login({username: this.username, password: this.password}).subscribe((res) => {
        if (res) {
          this.router.navigate(['/subjects']);
        }
        else {
          this.errorMessage = 'Invalid username or password';
        }
      });
    }
  }

}
