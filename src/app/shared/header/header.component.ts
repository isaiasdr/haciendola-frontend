import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  private logout() {
    this.authService.logout();
  }

  public headerItemsMenu: MenuItem[] = [
    {
      icon: 'pi pi-home',
      label: 'Home',
      command: () => this.router.navigateByUrl('/dashboard')
    }
  ];

  public profileItemsMenu: MenuItem[] = [{
    icon: 'pi pi-power-off',
    label: 'Logout',
    command: () => this.logout()
  }];
}
