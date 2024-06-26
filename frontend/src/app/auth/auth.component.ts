import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor() {}

  userDetails = {
    username: '',
    password: ''
  };

  submitForm(form: NgForm): void {
    if (form.valid) {
      console.log(this.userDetails);
    }
  }
}
