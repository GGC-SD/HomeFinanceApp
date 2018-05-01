import { Component } from '@angular/core';
import { AuthenticationService, TokenPayload } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './index.html'
})
export class LoginComponent {
  credentials: TokenPayload = {
    user_name: '',
    pwd: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe(() => {
      this.router.navigateByUrl('./FinanceTreeAngular/src/home.html');
    }, (err) => {
      console.error(err);
    }); 
  }
}
