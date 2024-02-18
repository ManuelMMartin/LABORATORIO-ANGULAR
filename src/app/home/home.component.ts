import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { PublicHeaderComponent } from '../public-header/public-header.component';
import { PrivateHeaderComponent } from '../private-header/private-header.component';
import { NgIf } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, PublicHeaderComponent, PrivateHeaderComponent, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isAuthenticated: boolean = false;
  username: string | null = null;



  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    // Verifica si el usuario está autenticado al cargar el componente
    this.isAuthenticated = this.authService.isLogged();

    // Si el usuario está autenticado, obtén su nombre de usuario
    if (this.isAuthenticated) {
      this.username = this.authService.getUsername();
    }
  }
}
