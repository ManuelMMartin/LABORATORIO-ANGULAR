import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly AUTH_STORAGE_KEY = 'auth';
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated$: Observable<boolean>;

  private isAuthenticated = false;
  private username: string | null = null;

  constructor() {
    // Inicializa el BehaviorSubject con el valor inicial del localStorage
    const authData = localStorage.getItem(this.AUTH_STORAGE_KEY);
    const initialState = authData ? JSON.parse(authData).isAuthenticated : false;
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(initialState);
    this.isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  }

  login(credentials: { username: string, password: string }): boolean {
    const validCredentials = credentials.username === 'master@lemoncode.net' && credentials.password === '123456';

    if (validCredentials) {
      // Guarda el estado de autenticación en localStorage
      localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify({ isAuthenticated: true, username: credentials.username }));
      
      this.isAuthenticated = true;
      this.username = credentials.username;
      this.isAuthenticatedSubject.next(true); // Emitir el estado de autenticación
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    // Elimina el estado de autenticación del localStorage al cerrar sesión
    localStorage.removeItem(this.AUTH_STORAGE_KEY);
    
    this.isAuthenticated = false;
    this.username = null;
    this.isAuthenticatedSubject.next(false); // Emitir el estado de autenticación
  }

  isLogged(): boolean {
    return this.isAuthenticated;
  }

  getUsername(): string | null {
    return this.username;
  }
}
