import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PublicHeaderComponent } from './public-header/public-header.component';
import { PrivateHeaderComponent } from "./private-header/private-header.component";
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, PublicHeaderComponent, PrivateHeaderComponent, FooterComponent]
})
export class AppComponent implements OnDestroy {
  title = 'LABORATORIO-ANGULAR';
  isAuthenticated: boolean = false;
  private authSubscription: Subscription;

  constructor(private authService: AuthService) {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }
}
