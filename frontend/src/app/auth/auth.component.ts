import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  constructor(private apiService: ApiService) {}

  userDetails = {
    username: '',
    password: ''
  };

  submitForm(form: any): void {
    if (form.valid) {
      this.apiService.login(this.userDetails).subscribe((data: any[]) => {
        console.log(data)
      });;
    }
  }
}
