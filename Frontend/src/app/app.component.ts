import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MSAL_INSTANCE, MsalModule } from '@azure/msal-angular';
import { AuthenticationResult, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';
import { CommonModule } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: '071b369a-b18e-48e6-b027-ad81c1283939',
      redirectUri: 'http://localhost:4200'
    }
  });
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HttpClientModule, MatToolbarModule, 
    MatIconModule, MatButtonModule, MatCardModule, MatSidenavModule, FormsModule, MatTreeModule,
    MsalModule, 
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    MsalService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  username?: string = '';

  constructor(private authService: MsalService) {

  }
  ngOnInit(): void {
    this.initialize();
    if(this.authService.instance.getActiveAccount() == null)
    {
      this.login();
    }
    else
    {
      this.username = this.authService.instance.getActiveAccount()?.username
    }
  }

  async initialize()
  {
    await this.authService.instance.initialize();
  }

  isLoggedIn(): boolean {
    return this.authService.instance.getActiveAccount() != null
  }

  login() {
    this.authService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        this.authService.instance.setActiveAccount(response.account);
        this.username = response.account.username;
      });
  }

  logout() {
    this.authService.logout()
  }
  isUsersOpen: boolean = false;
  isMillOpen: boolean = false;

  toggleUsers() {
    this.isUsersOpen = !this.isUsersOpen;
  }

  toggleMill() {
    this.isMillOpen = !this.isMillOpen;
  }
}


