import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['login']);
  }

  login(username: string, password: string) {
    if (username === 'Artur Rubets' && password === 'qwerty') {
      return 200;
    } else {
      return 403;
    }
  }
}
