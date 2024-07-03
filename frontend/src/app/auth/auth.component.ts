import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  userDetails = {
    username: '',
    password: ''
  };

  submitForm(form: NgForm): void {
    if (form.valid) {
      this.authService.login(this.userDetails).subscribe((res) => {
        if (res) {
          this.router.navigate(['/subjects']);
        }
        else {
          alert('Invalid credentials');
        }
      });
    }
  }
}
