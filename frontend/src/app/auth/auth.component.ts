import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(private authService : AuthService) {}

  userDetails = {
    username: '',
    password: ''
  };

  submitForm(form: NgForm): void {
    if (form.valid) {
      this.authService.login(this.userDetails);
    }
  }
}
