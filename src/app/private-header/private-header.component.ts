import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {
  username: string | null = null; // Variable para almacenar el nombre de usuario

  constructor(private authService: AuthService, private router: Router) {
    this.username = this.authService.getUsername(); // Obtiene el nombre de usuario al inicializar el componente
  }

  logout() {
    this.authService.logout(); // Llama al método logout del AuthService para cerrar sesión
    this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión
  }
}
