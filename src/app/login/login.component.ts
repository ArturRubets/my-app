import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.username.trim().length === 0) {
      this.errorMessage = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMessage = 'Password is required';
    } else {
      this.errorMessage = '';
      const result = this.auth.login(this.username, this.password);
      if (result === 200) {
        this.router.navigate(['home']);
      }
      if (result === 403) {
        this.errorMessage = 'Invalid Credentials';
      }
    }
  }
}
