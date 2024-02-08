import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { authEntity } from '../../models/authEntity';
import { AuthService } from '../../http/services/auth/auth/auth.service';


@Component({
  selector: 'app-login-flavia',
  standalone: true,
  imports: [FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  providers: [AuthService],
  templateUrl: './login-flavia.component.html',
  styleUrl: './login-flavia.component.css'
})
export class LoginFlaviaComponent {
  user = {} as authEntity;

  constructor(private authService: AuthService) {
  }

  async submitForm() {
    await this.authService.auth(this.user).then(
      promise => promise.subscribe(response => console.log(response))
    )
     this.user.login = '';
     this.user.password = '';
  }
}
