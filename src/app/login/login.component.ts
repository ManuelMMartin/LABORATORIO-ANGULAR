import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  model = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    if (this.authService.login(this.model)) {
      this.router.navigate(['/dashboard']); // Redirige al dashboard si el login es exitoso
    } else {
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
      this.model = { username: '', password: '' };
    }
  }
}
